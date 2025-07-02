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
}[] = [
  { key: "follows", label: "Email me when someone follows me" },
  { key: "answers", label: "Email me when someone answers on my post" },
  { key: "mentions", label: "Email me when someone mentions me" },
];

const appSettings: {
  key: SettingKey;
  label: string;
}[] = [
  { key: "launches", label: "New launches and projects" },
  { key: "updates", label: "Monthly product updates" },
  { key: "newsletter", label: "Subscribe to newsletter" },
];

const initialSettings: Record<SettingKey, boolean> = {
  follows: true,
  answers: false,
  mentions: true,
  launches: false,
  updates: false,
  newsletter: true,
};

const PlatformSettings: React.FC = () => {
  const [settings, setSettings] = useState(initialSettings);

  const toggle = (key: SettingKey) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  const renderSwitchRow = (key: SettingKey, label: string) => {
    const switchId = `setting-${key}`;
    return (
      <label
        key={key}
        htmlFor={switchId}
        className="flex items-center gap-3 cursor-pointer select-none"
      >
        <IOSSwitch
          id={switchId}
          checked={settings[key]}
          onChange={() => toggle(key)}
          slotProps={{ input: { "aria-label": label } }}
        />
        <span
          className={
            settings[key]
              ? "text-black text-xs md:text-sm"
              : "text-dark-silver text-xs md:text-sm"
          }
        >
          {label}
        </span>
      </label>
    );
  };

  return (
    <section>
      <h4 className="mb-4 md:mb-6">Platform Settings</h4>
      <div className="mb-4">
        <div className="mb-2 text-xs font-bold uppercase ">Account</div>
        <div className="flex flex-col gap-4 mb-6">
          {accountSettings.map(({ key, label }) => renderSwitchRow(key, label))}
        </div>
        <div className="mb-2 text-xs font-bold uppercase ">Application</div>
        <div className="flex flex-col gap-4">
          {appSettings.map(({ key, label }) => renderSwitchRow(key, label))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSettings;
