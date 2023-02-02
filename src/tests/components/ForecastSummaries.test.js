import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1525046400000,
        description: "Stub description",
        icon: "800",
        temperature: {
          min: 4,
          max: 11,
        },
      },
      {
        date: 1525132800000,
        description: "Stub description2",
        icon: "211",
        temperature: {
          min: 8,
          max: 13,
        },
      },
    ],
    onForecastSelect: jest.fn(),
  };

  it("renders correctly", () => {
    const rendered = renderer.create(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(rendered).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(screen.getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
