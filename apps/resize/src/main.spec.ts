import { handler } from "./main";

describe("main", () => {
    it("should require a file name", () => {
        expect(handler({ pathParameters: {}, queryStringParameters: {} } as any)).rejects.toThrow("No file name provided");
    });
});
