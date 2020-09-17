import React from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

const FilterSearch = ({ onChange }) => {
  const [search, setSearch] = React.useState("");

  const handleChange = (val) => {
    if (val === search) return;

    onChange(val);
    setSearch(val);
  };

  return (
    <div className="filter-search">
      <FaSearch className="filter-search__icon" />
      <input
        type="text"
        className="filter-search__input"
        onChange={(e) => handleChange(e.target.value)}
        placeholder={"Search"}
      />
    </div>
  );
};

export default FilterSearch;
