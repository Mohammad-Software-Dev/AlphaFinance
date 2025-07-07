import React, { useState } from "react";
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

type SettingKey =
  | "follows"
  | "answers"
  | "mentions"
  | "launches"
  | "updates"
  | "newsletter";

const accountSettings: {
  key: SettingKey;
  label: string;
  description?: string;
}[] = [
  {
    key: "follows",
    label: "Follows",
    description: "Email me when someone follows me",
  },
  {
    key: "answers",
    label: "Answers",
    description: "Email me when someone answers my post",
  },
  {
    key: "mentions",
    label: "Mentions",
    description: "Email me when someone mentions me",
  },
];

const appSettings: {
  key: SettingKey;
  label: string;
  description?: string;
}[] = [
  {
    key: "launches",
    label: "New launches",
    description: "Get notified about new launches and projects",
  },
  {
    key: "updates",
    label: "Product updates",
    description: "Monthly product updates",
  },
  {
    key: "newsletter",
    label: "Newsletter",
    description: "Subscribe to newsletter",
  },
];

const initialSettings: Record<SettingKey, boolean> = {
  follows: true,
  answers: false,
  mentions: true,
  launches: false,
  updates: false,
  newsletter: true,
};

const PlatformEditPanel: React.FC = () => {
  const [settings, setSettings] = useState(initialSettings);

  const toggle = (key: SettingKey) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  const renderSwitchRow = (
    key: SettingKey,
    label: string,
    description?: string,
    last: boolean = false
  ) => {
    return (
      <div
        key={key}
        className={
          "flex flex-row items-start justify-between md:items-center border-b border-light-silver py-4 " +
          (last ? "last:border-b-0" : "")
        }
      >
        <div className="md:flex-1">
          <div className="font-normal text-base">{label}</div>
          {description && (
            <div className="text-sm text-dim-gray mt-1">{description}</div>
          )}
        </div>
        <div className="mt-4 md:mt-0 md:w-36 flex justify-end w-fit">
          <IOSSwitch
            checked={settings[key]}
            onChange={() => toggle(key)}
            slotProps={{ input: { "aria-label": label } }}
          />
        </div>
      </div>
    );
  };

  return (
    <section>
      <h4 className="md:text-lg text-base mb-6 font-semibold md:font-normal">
        Platform Settings
      </h4>
      <div className="mb-4">
        <div className="mb-2  test-sm md:text-base font-bold uppercase ">
          Account
        </div>
        <div className="flex flex-col gap-0 mb-6">
          {accountSettings.map(({ key, label, description }, idx) =>
            renderSwitchRow(
              key,
              label,
              description,
              idx === accountSettings.length - 1
            )
          )}
        </div>
        <div className="mb-2  test-sm md:text-base font-bold uppercase ">
          Application
        </div>
        <div className="flex flex-col gap-0">
          {appSettings.map(({ key, label, description }, idx) =>
            renderSwitchRow(
              key,
              label,
              description,
              idx === appSettings.length - 1
            )
          )}
        </div>
      </div>
      {/* Buttons can be added here if needed */}
    </section>
  );
};

export default PlatformEditPanel;
