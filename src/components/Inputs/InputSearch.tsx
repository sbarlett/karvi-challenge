import React from "react";
import IconSearch from "../assets/IconSearch";
import { TextField } from "@mui/material";

const InputSearch = ({
  onChange,
  placeholder,
  name,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
}) => {
  return (
    <TextField
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      InputProps={{
        startAdornment: <IconSearch />,
        disableUnderline: true,
        sx: {
          "& .MuiInputBase-input::placeholder": {
            fontSize: 14,
            fontWeight: 700,
            textTransform: "capitalize",
            color: "#566DED",
            opacity: 1,
          },
        },
      }}
      variant="standard"
      sx={{
        "& .MuiInputBase-root": {
          maxWidth: 120,
          padding: 0,

          "& .MuiInputAdornment-root": {
            marginRight: 0,
          },
        },
        "& .MuiInputBase-input": {
          padding: "0 8px",
        },
        "& svg": {
          width: 28,
          height: 28,
        },
      }}
      size="small"
    />
  );
};

export default InputSearch;
