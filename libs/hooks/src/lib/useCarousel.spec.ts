import { renderHook, act } from "@testing-library/react-hooks";
import { useCarousel } from "./useCarousel";

describe("use carousel", () => {
    it("should cycle between the different elements correctly", () => {
        const { result } = renderHook(() => useCarousel(3, 1000));

        expect(result.current.selected).toEqual(0);

        act(() => result.current.incSelected());
        expect(result.current.selected).toEqual(1);
    });
});
