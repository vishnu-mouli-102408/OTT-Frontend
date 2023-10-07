import { useState } from "react";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import "./search.css";

const TypeSearch = () => {
  const [showClearIcon, setShowClearIcon] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearchText(inputValue);
    setShowClearIcon(inputValue !== "");
  };

  const handleClearClick = () => {
    setSearchText("");
    setShowClearIcon(false);
  };

  const inputStyle = {
    margin: "8px", // Add some margin for spacing
    width: "300px", // Set a fixed width or adjust it according to your layout
  };

  const clearIconStyle = {
    cursor: "pointer",
  };

  return (
    <div id="app">
      <FormControl style={inputStyle}>
        <TextField
          className="bradius"
          size="small"
          variant="outlined"
          placeholder="Search..."
          value={searchText}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: showClearIcon && (
              <InputAdornment
                position="end"
                style={clearIconStyle}
                onClick={handleClearClick}
              >
                <ClearIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </div>
  );
};

export default TypeSearch;
