import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Test city",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };

  it("renders correctly", () => {
    const rendered = renderer.create(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(rendered).toMatchSnapshot();
  });

  it("renders correct text", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(screen.getByTestId("search-form__input")).toHaveValue("Test city");
  });

  it("when search button is clicked, onSubmit is called", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    fireEvent.click(screen.getByRole("button"));
    expect(validProps.onSubmit).toHaveBeenCalled();
  });
});
