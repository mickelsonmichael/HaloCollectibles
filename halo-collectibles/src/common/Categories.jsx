import React from "react";
import { Input } from "reactstrap";

export default ({ onOptionChange, categories }) => (
  <Input
    type="select"
    onChange={(e) => onOptionChange(e.target.value)}
    size="sm"
  >
    <option value="">- All -</option>
    {categories.map((cat) => (
      <option key={cat.title} value={cat.title}>
        {cat.title}
      </option>
    ))}
  </Input>
);
