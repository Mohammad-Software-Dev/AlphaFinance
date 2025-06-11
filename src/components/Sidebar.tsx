import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import type { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import ArrowsIcon from "../assets/icons/arrows.svg?react";
import HomeIcon from "../assets/icons/home.svg?react";
import UserIcon from "../assets/icons/user.svg?react";
import ArticleIcon from "../assets/icons/article.svg?react";
import CalendarIcon from "../assets/icons/calendar.svg?react";
import StatisticsIcon from "../assets/icons/statistics.svg?react";
import BellIcon from "../assets/icons/bell.svg?react";
import SettingsIcon from "../assets/icons/settings.svg?react";

interface SidebarProps {
  onToggleDarkMode?: (enabled: boolean) => void;
  toggleEnabled?: boolean;
}

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
  width: 44,
  height: 28,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 2,
    margin: 0,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "var(--color-brand)",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 24,
    height: 24,
    backgroundColor: "#fff",
  },
  "& .MuiSwitch-track": {
    borderRadius: 30 / 2,
    backgroundColor: "var(--color-light-silver)",
    opacity: 1,
  },
}));

const mainIcons = [
  { label: "Home", Icon: HomeIcon },
  { label: "Users", Icon: UserIcon },
  { label: "Articles", Icon: ArticleIcon },
  { label: "Calendar", Icon: CalendarIcon },
  { label: "Statistics", Icon: StatisticsIcon },
] as const;

const settingsIcons = [
  { label: "Notifications", Icon: BellIcon },
  { label: "Settings", Icon: SettingsIcon },
] as const;

const Sidebar: React.FC<SidebarProps> = ({
  onToggleDarkMode = () => {},
  toggleEnabled = false,
}) => {
  const [enabled, setEnabled] = useState(toggleEnabled);
  const handleSwitch = (
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setEnabled(checked);
    onToggleDarkMode(checked);
  };

  const [activeIcon, setActiveIcon] = useState<string>("Users");
  const handleIconClick = (label: string) => setActiveIcon(label);

  return (
    <nav
      className="
        bg-white
        border border-light-silver
        rounded-[16px]
        w-[90px]
        md:h-[800px]
        flex flex-col justify-start
        relative overflow-visible  
      "
    >
      <div className="bg-gray-98 border-b border-light-silver p-6 flex justify-center rounded-t-[16px]">
        <HomeIcon className="w-[20px] h-[20px]" />
      </div>
      <button
        aria-label="Toggle sidebar"
        className="
    absolute
    top-[55px]       
    right-[-12px]     
    w-6 h-6        
    bg-white
    border border-light-silver
    hover:bg-[var(--color-gray-98)]
    transition-colors
    rounded-lg
     items-center justify-center
    hidden md:flex
  "
      >
        <ArrowsIcon className="w-4 h-4" />
      </button>

      <div className=" md:flex-1 py-6 flex flex-col items-center space-y-3">
        <span className="text-[10px] font-medium uppercase text-sonic-silver">
          Main
        </span>

        {mainIcons.map(({ label, Icon }) => {
          const isActive = activeIcon === label;
          return (
            <button
              key={label}
              aria-label={label}
              onClick={() => handleIconClick(label)}
              className={`
                p-3 rounded-lg 
                ${
                  isActive
                    ? "bg-[var(--color-white-smoke)]"
                    : "text-gray-600 hover:bg-[var(--color-white-smoke)]"
                }
              `}
            >
              <Icon
                className={`w-[20px] h-[20px] ${
                  isActive ? "text-[var(--color-brand)]" : ""
                }`}
              />
            </button>
          );
        })}

        <span className="text-[10px] font-medium uppercase text-sonic-silver mt-6">
          Settings
        </span>

        {settingsIcons.map(({ label, Icon }) => {
          const isActive = activeIcon === label;
          return (
            <button
              key={label}
              aria-label={label}
              onClick={() => handleIconClick(label)}
              className={`
                p-3 rounded-lg 
                ${
                  isActive
                    ? "bg-[var(--color-white-smoke)]"
                    : "text-gray-600 hover:bg-[var(--color-white-smoke)]"
                }
              `}
            >
              <Icon
                className={`w-[20px] h-[20px] ${
                  isActive ? "text-[var(--color-brand)]" : ""
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="bg-gray-98 border-t border-light-silver p-6 flex justify-center rounded-b-[16px]">
        <IOSSwitch checked={enabled} onChange={handleSwitch} />
      </div>
    </nav>
  );
};

export default Sidebar;
