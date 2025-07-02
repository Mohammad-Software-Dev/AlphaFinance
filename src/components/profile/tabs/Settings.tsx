import React, { useState } from "react";
import VerticalDivider from "../../common/VerticalDivider";
import HorizontalDivider from "../../common/HorizontalDivider";
import ProfileInformationSettings from "../ProfileInformationSettings";
import SettingsSectionsList from "../SettingsSectionsList";
import SettingsDetailPanel from "../SettingsDetailPanel";
import { Button } from "../../common/Button";

const Settings: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<{
    key: string;
    title: string;
  } | null>(null);

  const handleEdit = (key: string, title: string) =>
    setCurrentSection({ key, title });

  return (
    <>
      {/* --- MOBILE --- */}
      <div className={`block md:hidden w-full`}>
        {currentSection ? (
          <div className="w-full min-h-screen  ">
            <div className="flex justify-end">
              <Button
                variant="secondary"
                className="items-center justify-center flex text-center"
                onClick={() => setCurrentSection(null)}
              >
                Back
              </Button>
            </div>

            <SettingsDetailPanel sectionKey={currentSection.key} />
          </div>
        ) : (
          <div className="w-full ">
            <div className="border-b-[1px] border-light-silver pb-6 mb-6">
              <ProfileInformationSettings />
            </div>
            <SettingsSectionsList onEdit={handleEdit} />
          </div>
        )}
      </div>

      {/* --- DESKTOP --- */}
      <div className="hidden md:flex flex-col md:flex-row gap-8 lg:gap-0 w-full">
        <div className="w-full md:w-1/2">
          <div className="w-full">
            <div className="md:border-b-[1px] border-light-silver mb-4 md:mb-6">
              <div className="border-b-[1px] border-light-silver pb-4 mb-4 md:mb-6">
                <ProfileInformationSettings />
              </div>
              <SettingsSectionsList
                onEdit={handleEdit}
                currentSectionKey={currentSection?.key ?? ""}
              />
            </div>
          </div>
        </div>
        <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
        <HorizontalDivider className="block border-light-silver md:hidden self-stretch" />
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <SettingsDetailPanel sectionKey={currentSection?.key ?? null} />
        </div>
      </div>
    </>
  );
};

export default Settings;
