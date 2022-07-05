import { APIGatewayProxyResult } from "aws-lambda";
import S3 from "aws-sdk/clients/s3";

import { getExtension } from "@facture/helpers";

export async function handleExisting(fileName: string, bucket: string, s3: S3): Promise<APIGatewayProxyResult> {
    const fileExtension = getExtension(fileName);

    const uploaded = await s3.getObject({ Bucket: bucket, Key: fileName }).promise();

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/" + fileExtension, "Content-Disposition": `attachment; filename=${fileName}` },
        body: uploaded.Body?.toString("base64") || "",
        isBase64Encoded: true,
    };
}

export default handleExisting;
