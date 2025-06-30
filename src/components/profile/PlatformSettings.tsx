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

const PlatformSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    follows: true,
    answers: false,
    mentions: true,
    launches: false,
    updates: false,
    newsletter: true,
  });

  const toggle = (key: keyof typeof settings) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section>
      <h4 className="mb-4 md:mb-6">Platform Settings</h4>
      <div className="mb-4">
        <div className="mb-2 text-xs font-bold uppercase ">Account</div>
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-center gap-3">
            <IOSSwitch
              checked={settings.follows}
              onChange={() => toggle("follows")}
            />
            <span
              className={
                settings.follows
                  ? "text-black text-xs md:text-sm"
                  : "text-dark-silver text-xs md:text-sm"
              }
            >
              Email me when someone follows me
            </span>
          </div>
          <div className="flex items-center gap-3">
            <IOSSwitch
              checked={settings.answers}
              onChange={() => toggle("answers")}
            />
            <span
              className={
                settings.answers
                  ? "text-black text-xs md:text-sm"
                  : "text-dark-silver text-xs md:text-sm"
              }
            >
              Email me when someone answers on my post
            </span>
          </div>
          <div className="flex items-center gap-3">
            <IOSSwitch
              checked={settings.mentions}
              onChange={() => toggle("mentions")}
            />
            <span
              className={
                settings.mentions
                  ? "text-black text-xs md:text-sm"
                  : "text-dark-silver text-xs md:text-sm"
              }
            >
              Email me when someone mentions me
            </span>
          </div>
        </div>
        <div className="mb-2 text-xs font-bold uppercase ">Application</div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <IOSSwitch
              checked={settings.launches}
              onChange={() => toggle("launches")}
            />
            <span
              className={
                settings.launches
                  ? "text-black text-xs md:text-sm"
                  : "text-dark-silver text-xs md:text-sm"
              }
            >
              New launches and projects
            </span>
          </div>
          <div className="flex items-center gap-3">
            <IOSSwitch
              checked={settings.updates}
              onChange={() => toggle("updates")}
            />
            <span
              className={
                settings.updates
                  ? "text-black text-xs md:text-sm"
                  : "text-dark-silver text-xs md:text-sm"
              }
            >
              Monthly product updates
            </span>
          </div>
          <div className="flex items-center gap-3">
            <IOSSwitch
              checked={settings.newsletter}
              onChange={() => toggle("newsletter")}
            />
            <span
              className={
                settings.newsletter
                  ? "text-black text-xs md:text-sm"
                  : "text-dark-silver text-xs md:text-sm"
              }
            >
              Subscribe to newsletter
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSettings;
