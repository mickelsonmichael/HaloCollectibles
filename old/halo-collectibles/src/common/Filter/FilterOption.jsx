import React from "react";

const FilterOption = ({ value, text, onRemoved, onAdded, selected }) => {
  const handleSelectedChange = () => {
    if (selected) {
      onRemoved(value);
    } else {
      onAdded(value);
    }
  };

  return (
    <div className="filter-option">
      <label className="filter-option__label">
        <input
          type="checkbox"
          className="filter-option__input"
          onChange={handleSelectedChange}
          checked={selected}
        />
        {text}
      </label>
    </div>
  );
};

export default FilterOption;
