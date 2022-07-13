import { BigQuery } from "@google-cloud/bigquery";
import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    // const fileName = event.pathParameters?.file;
    // const size = event.queryStringParameters?.size;

    const bq = new BigQuery({
        projectId: process.env.GCP_PROJECT_ID,
        credentials: { client_email: process.env.GCP_CLIENT_EMAIL, private_key: process.env.GCP_PRIVATE_KEY },
    });
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

    const options = {
        query,
        location: "US",
    };

    const [job] = await bq.createQueryJob(options);
    const [rows] = await job.getQueryResults();

    console.log(rows);

    return { body: JSON.stringify("Hello world"), statusCode: 200 };
};
