import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    forecast: {
      date: 1525046400000,
      temperature: {
        min: 4,
        max: 11,
      },
      humidity: 30,
      wind: {
        speed: 13,
        direction: "s",
      },
    },
  };

  it("renders correctly", () => {
    const rendered = renderer.create(
      <ForecastDetails forecast={validProps.forecast} />
    );

    expect(rendered).toMatchSnapshot();
  });
});
