import React from "react";
import FilterList from "../Filter/FilterList";

export default ({ onOptionChange, categories }) => {
  const options = categories.map((c) => ({ value: c.title, text: c.title }));

  return <FilterList options={options} onChange={onOptionChange} />;
};
