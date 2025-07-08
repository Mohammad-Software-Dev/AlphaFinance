import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import type { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";

import BellIcon from "../assets/icons/bell.svg?react";
import SettingsIcon from "../assets/icons/settings.svg?react";
import HomeLottieIcon from "../components/lottie/HomeLottieIcon";
import DashboardLottieIcon from "../components/lottie/DashboardLottieIcon";
import BlogLottieIcon from "../components/lottie/BlogLottieIcon";
import ProfileLottieIcon from "../components/lottie/ProfileLottieIcon";
import WalletLottieIcon from "../components/lottie/WalletLottieIcon";
import { Tooltip } from "./Tooltip";
interface SidebarProps {
  onToggleDarkMode?: (enabled: boolean) => void;
  toggleEnabled?: boolean;
}

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

const mainIcons = [
  {
    label: "Home",
    Icon: DashboardLottieIcon,
    to: "/dashboard",
    tooltip: "Dashboard",
  },
  {
    label: "Real Estate Assets",
    Icon: HomeLottieIcon,
    to: "/real-estate-assets",
    tooltip: "Real Estate Assets",
  },
  {
    label: "Wallet",
    Icon: WalletLottieIcon,
    to: "/wallet",
    tooltip: "Wallet",
  },
  {
    label: "Blog",
    Icon: BlogLottieIcon,
    to: "/blog",
    tooltip: " Blog",
  },
  {
    label: "Profile",
    Icon: ProfileLottieIcon,
    to: "/profile",
    tooltip: "Profile",
  },
] as const;

const settingsIcons = [
  {
    label: "Notifications",
    Icon: BellIcon,
    to: "/notifications",
    tooltip: "Notifications",
  },
  {
    label: "Settings",
    Icon: SettingsIcon,
    to: "/settings",
    tooltip: "Settings",
  },
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

  const location = useLocation();

  return (
    <nav
      className="
        bg-white
        border-[1px] border-light-silver
        w-fit
        flex flex-col justify-start
        relative overflow-visible  
        h-screen
        min-h-fit max-h-[700px] 
        rounded-sm

      "
    >
      <Tooltip message="Alphaseed">
        <Link
          to="/dashboard"
          className="text-brand text-bold bg-alabaster border-b-[1px] border-light-silver rounded-t-sm p-3 flex justify-center "
          aria-label="Home"
          aria-current={location.pathname === "/dashboard" ? "page" : undefined}
        >
          AS
          {/* <HomeLottieIcon active={location.pathname === "/dashboard"} /> */}
        </Link>
      </Tooltip>
      <div className=" lg:flex-1 py-3 flex flex-col items-center space-y-3">
        <span className="text-[8px] font-medium uppercase text-dim-gray px-2">
          Main
        </span>

        {mainIcons.map(({ label, Icon, to, tooltip }) => {
          const isActive = location.pathname === to;
          return (
            <Tooltip key={label} message={tooltip}>
              <Link
                key={label}
                to={to}
                aria-label={label}
                className={`
                  
                p-2 rounded-sm flex
                ${isActive ? "bg-light-silver/50" : "hover:bg-light-silver/50"}
              `}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon />
              </Link>
            </Tooltip>
          );
        })}

        <span className="text-[8px] px-2 font-medium uppercase text-dim-gray mt-6">
          Settings
        </span>

        {settingsIcons.map(({ label, Icon, to, tooltip }) => {
          const isActive = location.pathname === to;
          return (
            <Tooltip key={label} message={tooltip}>
              <Link
                key={label}
                to={to}
                aria-label={label}
                aria-current={isActive ? "page" : undefined}
                className={`
              
                p-2 rounded-sm flex
                ${isActive ? "bg-light-silver/50" : "hover:bg-light-silver/50"}
              `}
              >
                <Icon className="w-[20px] h-[20px]" />
              </Link>
            </Tooltip>
          );
        })}
      </div>

      <div className="bg-alabaster border-t-[1px] border-light-silver p-2 flex justify-center rounded-b-sm">
        <Tooltip message="Dark / Light Mode">
          <IOSSwitch checked={enabled} onChange={handleSwitch} />
        </Tooltip>
      </div>
    </nav>
  );
};

export default Sidebar;
