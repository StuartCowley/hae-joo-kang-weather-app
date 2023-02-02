import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    forecast: {
      date: 1525046400000,
      description: "Stub description",
      icon: "800",
      temperature: {
        min: 4,
        max: 11,
      },
    },
    onSelect: jest.fn(),
  };

  it("renders correctly", () => {
    const rendered = renderer.create(
      <ForecastSummary
        forecast={validProps.forecast}
        onSelect={validProps.onSelect}
      />
    );

    expect(rendered).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    render(
      <ForecastSummary
        forecast={validProps.forecast}
        onSelect={validProps.onSelect}
      />
    );

    expect(screen.getByText("Mon Apr 30")).toHaveAttribute(
      "class",
      "forecast-summary__date"
    );
    expect(screen.getByText("Stub description")).toHaveAttribute(
      "class",
      "forecast-summary__description"
    );
    expect(screen.getByTestId("forecast-icon")).toHaveClass(
      "forecast-summary__icon"
    );
    expect(screen.getByText("11°C")).toHaveAttribute(
      "class",
      "forecast-summary__temperature"
    );
  });

  it("clicking forecast calls correct function", () => {
    render(
      <ForecastSummary
        forecast={validProps.forecast}
        onSelect={validProps.onSelect}
      />
    );

    fireEvent.click(screen.getByRole("button"));
    expect(validProps.onSelect).toHaveBeenCalled();
    expect(validProps.onSelect).toHaveBeenCalledTimes(1);
    expect(validProps.onSelect).toHaveBeenCalledWith(validProps.forecast.date);
  });
});
