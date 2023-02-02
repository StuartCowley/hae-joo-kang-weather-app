import React from "react";
import renderer from "react-test-renderer";
import ToggleTheme from "../../components/ToggleTheme";
import { ThemeProvider } from "../../context/ThemeProvider";

describe("ToggleTheme", () => {
  it("renders correctly", () => {
    const rendered = renderer.create(
      <ThemeProvider>
        <ToggleTheme />
      </ThemeProvider>
    );
    expect(rendered).toMatchSnapshot();
  });
});
