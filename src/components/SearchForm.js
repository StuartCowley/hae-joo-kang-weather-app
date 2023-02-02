import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="city name"
        onChange={handleInputChange}
        value={searchText}
        data-testid="search-form__input"
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
