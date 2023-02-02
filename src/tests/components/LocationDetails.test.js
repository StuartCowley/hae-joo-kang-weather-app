import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  const validProps = {
    city: "Test city",
    country: "Test country",
  };

  it("renders correctly", () => {
    const rendered = renderer.create(
      <LocationDetails city={validProps.city} country={validProps.country} />
    );
    expect(rendered).toMatchSnapshot();
  });

  it("renders correct city and location", () => {
    render(
      <LocationDetails city={validProps.city} country={validProps.country} />
    );

    const locationDetails = screen.getByText("Test city, Test country");
    expect(locationDetails).toBeInTheDocument();
    expect(locationDetails).toBeInstanceOf(HTMLHeadingElement);
  });

  it("produces error message when it is passed as a prop", () => {
    render(
      <LocationDetails
        city=""
        country={validProps.country}
        errorMessage="test error message!"
      />
    );

    expect(screen.getByText("test error message!")).toBeInTheDocument();
  });
});
