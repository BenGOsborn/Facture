import { renderHook, act } from "@testing-library/react-hooks";

import { useCarousel } from "./useCarousel";

describe("use carousel", () => {
    it("should cycle between the different elements correctly", () => {
        const testData = {
            size: 3,
            shiftSize: 1000,
        };

        const { result } = renderHook(() => useCarousel(testData.size, testData.shiftSize));

        expect(result.current.selected).toEqual(0);

        act(() => result.current.incSelected());
        expect(result.current.selected).toEqual(1);
        expect(result.current.position).toEqual([testData.shiftSize, -1 * testData.shiftSize]);

        act(() => {
            result.current.decSelected();
            result.current.decSelected();
        });
        expect(result.current.selected).toEqual(2);
        expect(result.current.position).toEqual([-1 * testData.shiftSize, testData.shiftSize]);

        act(() => result.current.incSelected());
        expect(result.current.selected).toEqual(0);
        expect(result.current.position).toEqual([testData.shiftSize, -1 * testData.shiftSize]);
    });
});
