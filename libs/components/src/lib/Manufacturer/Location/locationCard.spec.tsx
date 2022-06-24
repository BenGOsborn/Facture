import { render } from "@testing-library/react";
import { LocationCard } from "./locationCard";

jest.mock("@react-google-maps/api", () => {
    return {
        GoogleMap: () => null,
        Marker: () => null,
    };
});

describe("location card", () => {
    it("should render a location card", () => {
        const component = render(<LocationCard mapScriptLoaded={true} location={{ address: "Test address", label: "Testing", latitude: 1, longitude: 1 }} />);

        const label = component.getByRole("location-card-label");
        const address = component.getByRole("location-card-address");

        expect(label.textContent).toEqual("Testing");
        expect(address.textContent).toEqual("Test address");
    });
});
