import React, { useState } from "react";
import { Button } from "../../common/Button";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import type { SwitchProps } from "@mui/material/Switch";

// The same IOSSwitch as before
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

interface SecurityRow {
  key: string;
  label: string;
  description: string;
  enabled: boolean;
}

const initialRows: SecurityRow[] = [
  {
    key: "logging_in",
    label: "Logging in",
    description: "Notify me via email when logging in",
    enabled: true,
  },
  {
    key: "payments",
    label: "Payments",
    description: "Send SMS confirmation for all online payments",
    enabled: false,
  },
  {
    key: "access",
    label: "Access",
    description: "Check which devices accessed your account",
    enabled: true,
  },
  {
    key: "find_my_device",
    label: "Find my device",
    description:
      "Find My Device, make sure your device can be found if it gets lost",
    enabled: true,
  },
  {
    key: "lock_my_device",
    label: "Lock my device",
    description: "Lock your device with a PIN, pattern, or password",
    enabled: true,
  },
  {
    key: "manage_apps",
    label: "Manage apps",
    description:
      "Manage what apps have access to app-usage data on your device",
    enabled: false,
  },
];

const SecurityEditPanel: React.FC = () => {
  const [savedRows, setSavedRows] = useState<SecurityRow[]>(initialRows);
  const [rows, setRows] = useState<SecurityRow[]>(initialRows);
  const [status, setStatus] = useState<string | null>(null);

  const hasChanges =
    JSON.stringify(rows.map((r) => r.enabled)) !==
    JSON.stringify(savedRows.map((r) => r.enabled));

  const handleSwitch = (rowKey: string) => {
    setStatus(null);
    setRows((prev) =>
      prev.map((row) =>
        row.key === rowKey ? { ...row, enabled: !row.enabled } : row
      )
    );
  };

  const handleCancel = () => {
    setRows(savedRows);
    setStatus("Changes discarded.");
  };

  const handleSave = () => {
    setSavedRows(rows);
    setStatus("Security settings saved.");
  };

  return (
    <div className="">
      <h4 className="md:text-lg text-base mb-6 font-semibold md:font-normal">
        Security Settings
      </h4>
      <div className="flex flex-col gap-4">
        {rows.map((row) => (
          <div
            key={row.key}
            className="flex flex-row items-start justify-between  md:items-center border-b border-light-silver last:border-b-0 py-4 "
          >
            {/* Activity label and description */}
            <div className="md:flex-1">
              <div className="font-normal text-base">{row.label}</div>
              <div className="text-sm text-dim-gray mt-1">
                {row.description}
              </div>
            </div>
            {/* Switch */}
            <div className="mt-4 md:mt-0 md:w-36 flex justify-end w-fit">
              <IOSSwitch
                checked={row.enabled}
                onChange={() => handleSwitch(row.key)}
              />
            </div>
          </div>
        ))}
      </div>
      {status && <p className="text-sm text-brand mt-4">{status}</p>}
      {/* Buttons */}
      <div className="flex gap-3 justify-end mt-8">
        <Button variant="secondary" onClick={handleCancel} disabled={!hasChanges}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave} disabled={!hasChanges}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default SecurityEditPanel;
