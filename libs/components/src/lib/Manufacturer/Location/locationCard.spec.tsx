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
        const testData = {
            mapScriptLoaded: true,
            location: { address: "Test address", label: "Testing", latitude: 1, longitude: 1 },
        };

        const component = render(<LocationCard {...testData} />);

        const label = component.getByRole("location-card-label");
        const address = component.getByRole("location-card-address");

        expect(label.textContent).toEqual(testData.location.label);
        expect(address.textContent).toEqual(testData.location.address);
    });
});
