import React, { useState } from "react";
import { Button } from "../../common/Button";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import type { SwitchProps } from "@mui/material/Switch";

// Custom IOS Switch
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
  width: 30,
  height: 18,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 2,
    margin: 0,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(12px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "var(--color-brand)",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 14,
    height: 14,
    backgroundColor: "#fff",
  },
  "& .MuiSwitch-track": {
    borderRadius: 20,
    backgroundColor: "var(--color-light-silver)",
    opacity: 1,
  },
}));

const twoFactorRows = [
  {
    key: "security_keys",
    label: "Security keys",
    value: "No Security Keys",
    action: "Add",
    actionType: "primary",
  },
  {
    key: "sms_number",
    label: "SMS number",
    value: "+4012374423",
    action: "Edit",
    actionType: "secondary",
  },
  {
    key: "auth_app",
    label: "Authentication app",
    value: "Not Configured",
    action: "Set up",
    actionType: "primary",
  },
];

const TwoFactorEditPanel: React.FC = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="">
      <h4 className="md:text-lg text-base mb-6 font-semibold md:font-normal">
        Two-factor authentication
      </h4>
      <div className="mb-6 text-sm text-dim-gray">
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <IOSSwitch
            checked={enabled}
            onChange={() => setEnabled((v) => !v)}
            slotProps={{
              input: { "aria-label": "Enable two-factor authentication" },
            }}
          />
          <span
            className={
              enabled
                ? "text-base text-brand font-medium"
                : "text-base text-dark-silver font-medium"
            }
          >
            {enabled ? "Enabled" : "Disabled"}
          </span>
        </label>
      </div>
      {/* 2FA rows, dimmed/disabled when switch is off */}
      <div
        className={`flex flex-col transition-opacity duration-200 ${
          !enabled ? "opacity-50 pointer-events-none select-none" : ""
        }`}
      >
        {twoFactorRows.map((row, idx) => (
          <div
            key={row.key}
            className={`flex items-center justify-between py-4 border-b border-light-silver ${
              idx === twoFactorRows.length - 1 ? "last:border-b-0" : ""
            }`}
          >
            <div className="flex-1">
              <div className="text-base">{row.label}</div>
              <div className="text-sm text-dim-gray mt-1">{row.value}</div>
            </div>
            <div className="flex justify-center w-1/5 md:w-1/12 md:justify-start">
              <Button
                variant="link"
                className="text-brand border-transparent text-sm"
                disabled={!enabled}
                tabIndex={!enabled ? -1 : 0}
              >
                {row.action}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 justify-end mt-8">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save</Button>
      </div>
    </div>
  );
};

export default TwoFactorEditPanel;
