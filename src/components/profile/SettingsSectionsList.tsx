import React from "react";
import { Button } from "../common/Button";

interface Section {
  key: string;
  title: string;
  description: string;
}

const sections: Section[] = [
  {
    key: "basic-info",
    title: "Basic Info",
    description:
      "Choose how you receive notifications. These notification settings apply to the things you're watching.",
  },
  {
    key: "notifications",
    title: "Notifications",
    description:
      "Choose how you receive notifications. These notification settings apply to the things you're watching.",
  },
  {
    key: "delete-account",
    title: "Delete Account",
    description:
      "Choose how you receive notifications. These notification settings apply to the things you're watching.",
  },
  {
    key: "security",
    title: "Security",
    description:
      "Choose how you receive notifications. These notification settings apply to the things you're watching.",
  },
  {
    key: "password",
    title: "Password",
    description:
      "Choose how you receive notifications. These notification settings apply to the things you're watching.",
  },
  {
    key: "2fa",
    title: "2FA",
    description:
      "Choose how you receive notifications. These notification settings apply to the things you're watching.",
  },
  {
    key: "sessions",
    title: "Sessions",
    description:
      "Choose how you receive notifications. These notification settings apply to the things you're watching.",
  },
];

interface SettingsSectionsListProps {
  onEdit: (sectionKey: string, sectionTitle: string) => void;
  currentSectionKey?: string;
}

const SettingsSectionsList: React.FC<SettingsSectionsListProps> = ({
  onEdit,
  currentSectionKey,
}) => (
  <div className="  flex flex-col gap-6">
    {sections.map((section) => (
      <div
        key={section.key}
        className="flex flex-col md:flex-row md:items-center justify-between border-b-[1px] border-light-silver last:border-b-0 pb-5 last:pb-0 gap-5"
      >
        <div>
          <div className=" text-sm md:text-base">{section.title}</div>
          <div className="text-dim-gray text-xs md:text-sm mt-1">
            {section.description}
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            variant="secondary"
            size="sm"
            className={` ${
              currentSectionKey && currentSectionKey === section.key
                ? " border-brand text-brand"
                : ""
            } transition`}
            onClick={() => onEdit(section.key, section.title)}
          >
            Edit
          </Button>
        </div>
      </div>
    ))}
  </div>
);

export default SettingsSectionsList;
