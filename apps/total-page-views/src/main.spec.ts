import { handler } from "./main";

describe("main", () => {
    it("should work", async () => {
        await handler({} as any);
    });
});
