import React from "react";
import { FaFilter } from "react-icons/fa";
import "./FilterList.css";
import FilterOption from "./FilterOption";

const FilterList = ({ onChange, options }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);

  const handleAdd = (val) => {
    if (selected.includes(val)) return;

    setSelected((s) => {
      let n = [...s, val];

      onChange(n);

      return n;
    });
  };

  const handleRemove = (val) => {
    const i = selected.indexOf(val);

    if (i === -1) return;

    setSelected((s) => {
      let n = [...s.slice(0, i), ...s.slice(i + 1)];

      onChange(n);

      return n;
    });
  };

  const filterOptions = options.map((o) => {
    return (
      <FilterOption
        value={o.value}
        text={o.text}
        onAdded={handleAdd}
        onRemoved={handleRemove}
        selected={selected.includes(o.value)}
      />
    );
  });

  const half = Math.floor(filterOptions.length / 2) + 1;
  const leftCol = filterOptions.slice(0, half);
  const rightCol = filterOptions.slice(half);

  return (
    <div className={"filter" + (isOpen ? " open" : "")}>
      <div className="filter-button" onClick={() => setIsOpen(!isOpen)}>
        <FaFilter className="filter-button__icon" />
        <span className="filter-button__text">Filter</span>
      </div>
      <div
        className="filter-list__wrapper"
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false);
        }}
      >
        <div className="filter-list">
          <div className="filter-list__header">
            Edit Filter{" "}
            <span
              className="filter-list__header-close"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </span>
          </div>
          <div className="filter-list__body">
            <div className="filter-list__column">{leftCol}</div>
            <div className="filter-list__column">{rightCol}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
