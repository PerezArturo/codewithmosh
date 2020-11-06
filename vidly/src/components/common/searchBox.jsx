import React from "react";
import { TextField } from "@material-ui/core";

const SearchBox = ({ value, onChange }) => {
  return (
    <TextField
      type="text"
      name="query"
      variant="outlined"
      fullWidth
      margin="dense"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
