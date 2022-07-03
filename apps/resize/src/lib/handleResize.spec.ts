import { handleResize } from "./handleResize";
import { s3 } from "./mocks/s3";

jest.mock("sharp", () => {
    const originalModule = jest.requireActual("sharp");

    return {
        __esModule: true,
        ...originalModule,
        default: (body: string) => ({
            resize: (width: number, height: number) => ({
                toBuffer: () => {
                    return body;
                },
            }),
        }),
    };
});

describe("handle resize", () => {
    it("should handle a file with resize", async () => {
        const out = await handleResize("hello.png", "50x50.hello.png", { width: 50, height: 50 }, "", "", s3 as any);

        expect(out.statusCode).toEqual(200);
        expect(out.headers["Content-Type"]).toEqual("application/png");
        expect(out.headers["Content-Disposition"]).toEqual("attachment; filename=50x50.hello.png");
        expect(out.body).toEqual("No size");
        expect(out.isBase64Encoded).toEqual(true);
    });
});
