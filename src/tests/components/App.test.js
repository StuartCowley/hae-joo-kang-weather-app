import React from "react";
import renderer from "react-test-renderer";
import App from "../../components/App";
import { ThemeProvider } from "../../context/ThemeProvider";

describe("App", () => {
  it("renders App correctly", () => {
    const rendered = renderer.create(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    expect(rendered).toMatchSnapshot();
  });
});
