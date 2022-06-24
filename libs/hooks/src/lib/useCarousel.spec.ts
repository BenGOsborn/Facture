import { renderHook, act } from "@testing-library/react-hooks";
import { useCarousel } from "./useCarousel";

describe("use carousel", () => {
    it("should cycle between the different elements correctly", () => {
        const { result } = renderHook(() => useCarousel(3, 1000));

        expect(result.current.selected).toEqual(0);

        act(() => result.current.incSelected());
        expect(result.current.selected).toEqual(1);
        expect(result.current.position).toEqual([1000, -1000]);

        act(() => {
            result.current.decSelected();
            result.current.decSelected();
        });
        expect(result.current.selected).toEqual(2);
        expect(result.current.position).toEqual([-1000, 1000]);

        act(() => result.current.incSelected());
        expect(result.current.selected).toEqual(0);
    });
});
