import { BigQuery } from "@google-cloud/bigquery";
import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    // const fileName = event.pathParameters?.file;
    // const size = event.queryStringParameters?.size;

    const creds = JSON.parse(process.env.GCP_CREDENTIALS);
    const region = process.env.GCP_REGION;

    const bq = new BigQuery({
        projectId: creds.project_id,
        credentials: {
            client_email: creds.client_email,
            private_key: creds.private_key,
        },
    });

    console.log("Hello1");

    const query = `
    SELECT
  key,
  value.string_value
FROM
  \`facture-353822.analytics_320496772.*\`,
  UNNEST(event_params)
WHERE
  event_name = "card_search_hit"
  AND key = "cardOwnerId"
  OR key = "query"
LIMIT
  100
    `;

    const [job] = await bq.createQueryJob({ query, location: region });
    const [rows] = await job.getQueryResults();

    console.log(rows);

    return { body: JSON.stringify("Hello world"), statusCode: 200 };
};
