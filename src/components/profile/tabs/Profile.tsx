import React from "react";
import ProfileInformation from "../ProfileInformation";
import PlatformSettings from "../PlatformSettings";
import LogOverview from "../LogOverview";
import Projects from "../Projects";

const Profile: React.FC = () => {
  return (
    <div className="w-full  grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: Profile Information & Projects */}
      <div className="col-span-1 flex flex-col gap-8">
        <ProfileInformation />
        <Projects />
      </div>
      {/* Center: Platform Settings */}
      <div className="col-span-1 flex flex-col">
        <PlatformSettings />
      </div>
      {/* Right: Log Overview */}
      <div className="col-span-1 flex flex-col">
        <LogOverview />
      </div>
    </div>
  );
};

export default Profile;
