import React from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { resolveColor } from "src/utils/colors";

type DateInputProps = {
  value: Date | null;
  onChange: (date: Date | null) => void;
};

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      className="w-1/2"
      enableAccessibleFieldDOMStructure={false}
      value={value}
      onChange={onChange}
      format="yyyy-MM-dd"
      slots={{ textField: TextField }}
      slotProps={{
        textField: {
          size: "small",
          variant: "standard",
        },
      }}
    />
  </LocalizationProvider>
);

export default DateInput;
