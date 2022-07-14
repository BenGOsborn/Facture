import { handler } from "./main";
import { z } from "zod";

describe("main", () => {
    it("should get the number of views for a given manufacturer", async () => {
        const result = await handler({ pathParameters: { manufacturer: "mcm-manufacturing" }, queryStringParameters: { from: "0" } } as any);
        result.body = JSON.parse(result.body);

        const schema = z.object({
            body: z.object({
                views: z.number(),
            }),
        });
        expect(schema.safeParse(result).success).toEqual(true);
    });
});
