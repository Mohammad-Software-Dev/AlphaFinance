import * as React from "react";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

type DateInputProps = {
  value: Date | null;
  onChange: (date: Date | null) => void;
};

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Box>
      <DatePicker
        value={value}
        onChange={onChange}
        format="yyyy-MM-dd"
        slotProps={{
          textField: {
            size: "small",
            variant: "standard",
            sx: {
              // Input text
              "& .MuiInputBase-input": {
                fontSize: 18,
                color: "#f32",
              },
              // Calendar icon
              "& .MuiIconButton-root": {
                color: "#f32",
              },
              // Label
              "& .MuiInputLabel-root": {
                fontSize: 15,
                color: "#888",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#f32",
              },
            },
          },
        }}
      />
    </Box>
  </LocalizationProvider>
);

export default DateInput;
