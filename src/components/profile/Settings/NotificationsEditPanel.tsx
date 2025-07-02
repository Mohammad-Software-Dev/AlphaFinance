import React, { useState } from "react";
import { Button } from "../../common/Button";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import type { SwitchProps } from "@mui/material/Switch";

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

type Channel = "email" | "push" | "sms";
interface NotificationRow {
  key: string;
  label: string;
  description: string;
  email: boolean;
  push: boolean;
  sms: boolean;
}

const initialRows: NotificationRow[] = [
  {
    key: "mentions",
    label: "Mentions",
    description: "Notify when another user mentions you in a comment",
    email: true,
    push: true,
    sms: true,
  },
  {
    key: "comments",
    label: "Comments",
    description: "Notify when another user comments your item",
    email: false,
    push: true,
    sms: false,
  },
  {
    key: "follows",
    label: "Follows",
    description: "Notify when another user follows you",
    email: true,
    push: true,
    sms: false,
  },
  {
    key: "login_new_device",
    label: "Log in from a new device",
    description: "Notify when another user log in from a new device",
    email: true,
    push: true,
    sms: false,
  },
];

const channelHeaders: { label: string; key: Channel }[] = [
  { label: "Email", key: "email" },
  { label: "Push", key: "push" },
  { label: "SMS", key: "sms" },
];

const NotificationsEditPanel: React.FC = () => {
  const [rows, setRows] = useState<NotificationRow[]>(initialRows);

  const handleSwitch = (rowKey: string, channel: Channel) => {
    setRows((prev) =>
      prev.map((row) =>
        row.key === rowKey ? { ...row, [channel]: !row[channel] } : row
      )
    );
  };

  return (
    <div className="">
      <h4 className="md:text-lg text-base mb-6 font-semibold md:font-normal">
        Notifications
      </h4>

      {/* HEADER */}
      <div className="hidden md:flex px-2 pb-2">
        <div className="flex-1 text-left font-medium text-base pl-0">
          Activity
        </div>
        {channelHeaders.map((header) => (
          <div
            key={header.key}
            className="w-24 text-center font-medium text-base"
          >
            {header.label}
          </div>
        ))}
      </div>

      {/* ROWS */}
      <div className="flex flex-col gap-4">
        {rows.map((row) => (
          <div
            key={row.key}
            className="flex flex-col md:flex-row items-start md:items-center border-b border-light-silver last:border-b-0 py-4 "
          >
            {/* Activity label and description */}
            <div className="flex-1">
              <div className="font-normal text-base">{row.label}</div>
              <div className="text-sm text-dim-gray mt-1">
                {row.description}
              </div>
            </div>
            {/* Switches */}
            <div className="flex flex-row md:flex-row justify-between md:gap-2 w-full md:w-auto mt-4 md:mt-0">
              {channelHeaders.map((header) => {
                const switchId = `${row.key}-${header.key}-switch`;
                return (
                  <label
                    key={header.key}
                    htmlFor={switchId}
                    className="flex items-center cursor-pointer select-none"
                  >
                    <div
                      className={`md:hidden text-center font-medium text-sm mr-3 ${
                        row[header.key] ? "text-brand" : "text-dark-silver"
                      }`}
                    >
                      {header.label}
                    </div>
                    <div className="text-center md:w-24">
                      <IOSSwitch
                        id={switchId}
                        checked={row[header.key]}
                        onChange={() => handleSwitch(row.key, header.key)}
                      />
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-end mt-8">
        <Button size="sm" variant="secondary">
          Cancel
        </Button>
        <Button size="sm" variant="primary">
          Save
        </Button>
      </div>
    </div>
  );
};

export default NotificationsEditPanel;
