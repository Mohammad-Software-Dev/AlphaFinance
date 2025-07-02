import React, { useState } from "react";

import EditIcon from "../../assets/icons/edit.svg?react";
import userImage from "../../assets/images/Daivd.png";
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

const ProfileInformationSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    dark: true,
  });
  const toggle = (key: keyof typeof settings) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section>
      <h4 className="mb-4 md:mb-6">Profile Information</h4>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={userImage}
            alt="David Peters"
            className="md:w-16 md:h-16 w-12 h-12 rounded-full object-cover "
          />
          <div>
            <div className="flex justify-between gap-6 items-center">
              <h4 className=" text-black flex items-center gap-2">
                David Peters
              </h4>
              <EditIcon className="w-5 h-5 cursor-pointer" />
            </div>
            <div className="text-xs md:text-sm font-normal">
              United Arab Emirates,Dubai
            </div>
          </div>
        </div>
        <div className="flex ml-3 md:ml-0 mt-3 md:mt-0 items-center gap-3">
          <label
            className={
              `flex items-center gap-3 cursor-pointer select-none ` +
              (settings.dark ? "text-black" : "text-dark-silver") +
              " text-xs md:text-sm"
            }
            tabIndex={0}
          >
            <IOSSwitch
              checked={settings.dark}
              onChange={() => toggle("dark")}
              slotProps={{ input: { "aria-label": "Switch to (Lorem ipsum)" } }}
            />
            Switch to (Lorem ipsum)
          </label>
        </div>
      </div>
    </section>
  );
};

export default ProfileInformationSettings;
