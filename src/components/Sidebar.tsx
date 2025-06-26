import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import type { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
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
  { label: "Home", Icon: HomeIcon, to: "/dashboard" },
  { label: "Users", Icon: UserIcon, to: "/users" },
  { label: "Articles", Icon: ArticleIcon, to: "/articles" },
  { label: "Calendar", Icon: CalendarIcon, to: "/calendar" },
  { label: "Statistics", Icon: StatisticsIcon, to: "/statistics" },
] as const;

const settingsIcons = [
  { label: "Notifications", Icon: BellIcon, to: "/notifications" },
  { label: "Settings", Icon: SettingsIcon, to: "/settings" },
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

  const location = useLocation();

  return (
    <nav
      className="
        bg-white
        border-[1px] border-light-silver
        rounded-[16px]
        w-[90px]
        lg:h-[800px]
        flex flex-col justify-start
        relative overflow-visible  
      "
    >
      <Link
        to="/dashboard"
        className="bg-alabaster border-b-[1px] border-light-silver p-6 flex justify-center rounded-t-[16px]"
        aria-label="Home"
        onClick={() => setActiveIcon("Home")}
      >
        <HomeIcon
          className={`w-[20px] h-[20px] ${
            location.pathname === "/dashboard"
              ? "text-[var(--color-brand)]"
              : ""
          }`}
        />
      </Link>
      <button
        aria-label="Toggle sidebar"
        className="
          absolute
          top-[55px]       
          right-[-12px]     
          w-6 h-6        
          bg-white
          border border-light-silver
          hover:bg-[var(--color-alabaster)]
          transition-colors
          rounded-lg
          items-center justify-center
          hidden lg:flex
        "
      >
        <ArrowsIcon className="w-4 h-4" />
      </button>

      <div className=" lg:flex-1 py-6 flex flex-col items-center space-y-3">
        <span className="text-[10px] font-medium uppercase text-sonic-silver">
          Main
        </span>

        {mainIcons.map(({ label, Icon, to }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={label}
              to={to}
              aria-label={label}
              className={`
                p-3 rounded-lg flex
                ${isActive ? "bg-light-silver/50" : "hover:bg-light-silver/50"}
              `}
              onClick={() => setActiveIcon(label)}
            >
              <Icon className="w-[20px] h-[20px]" />
            </Link>
          );
        })}

        <span className="text-[10px] font-medium uppercase text-sonic-silver mt-6">
          Settings
        </span>

        {settingsIcons.map(({ label, Icon, to }) => {
          const isActive = activeIcon === label;
          return (
            <Link
              key={label}
              to={to}
              aria-label={label}
              onClick={() => setActiveIcon(label)}
              className={`
                p-3 rounded-lg flex
                ${isActive ? "bg-light-silver/50" : "hover:bg-light-silver/50"}
              `}
            >
              <Icon className="w-[20px] h-[20px]" />
            </Link>
          );
        })}
      </div>

      <div className="bg-alabaster border-t-[1px] border-light-silver p-6 flex justify-center rounded-b-[16px]">
        <IOSSwitch checked={enabled} onChange={handleSwitch} />
      </div>
    </nav>
  );
};

export default Sidebar;
