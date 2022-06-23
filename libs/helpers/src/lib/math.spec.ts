import { mod } from "./math";

describe("math", () => {
    it("should calculate modulo correctly", () => {
        expect(mod(3, 2)).toEqual(1);
        expect(mod(-1, 3)).toEqual(2);
    });
});
