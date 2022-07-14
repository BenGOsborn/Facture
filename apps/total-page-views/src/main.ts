import { BigQuery } from "@google-cloud/bigquery";
import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    const manufacturer = event.pathParameters?.manufacturer;
    const from = parseInt(event.queryStringParameters?.from);

    const creds = JSON.parse(process.env.GCP_CREDENTIALS);
    const region = process.env.GCP_REGION;

    const bq = new BigQuery({
        projectId: creds.project_id,
        credentials: {
            client_email: creds.client_email,
            private_key: creds.private_key,
        },
    });

    const query = `
                    SELECT
                        COUNT(*) as views
                    FROM
                        \`facture-353822.analytics_320496772.*\`,
                        UNNEST(event_params)
                    WHERE
                        event_name = "page_view"
                        AND key = "page_location"
                        AND value.string_value LIKE CONCAT("%facture.com.au%", @manufacturer, "%")
                        AND event_timestamp >= @from
                `;

    const [job] = await bq.createQueryJob({ query, location: region, params: { manufacturer, from } });
    const [[row]] = await job.getQueryResults();

    return { body: JSON.stringify(row), statusCode: 200 };
};
