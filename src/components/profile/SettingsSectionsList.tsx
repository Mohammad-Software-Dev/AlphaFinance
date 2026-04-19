import React from "react";
import { Button } from "../common/Button";

export interface Section {
  key: string;
  title: string;
  description: string;
}

export const settingsSections: Section[] = [
  {
    key: "basic-info",
    title: "Basic Info",
    description: "Update your personal details and profile information.",
  },
  {
    key: "notifications",
    title: "Notifications",
    description: "Manage how and when you receive alerts and updates.",
  },
  {
    key: "platform",
    title: "Platform",
    description: "Customize your platform experience and preferences.",
  },
  {
    key: "delete-account",
    title: "Delete Account",
    description: "Permanently delete your account and all associated data.",
  },
  {
    key: "security",
    title: "Security",
    description: "Review and adjust your account security settings.",
  },
  {
    key: "password",
    title: "Password",
    description: "Change your password to keep your account secure.",
  },
  {
    key: "2fa",
    title: "2FA",
    description:
      "Enable or manage two-factor authentication for extra protection.",
  },
  {
    key: "sessions",
    title: "Sessions",
    description: "View and manage your active device sessions.",
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
    {settingsSections.map((section) => (
      <div
        key={section.key}
        className="flex flex-col md:flex-row md:items-center justify-between border-b-[1px] border-light-silver last:border-b-0 pb-5  gap-5"
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
