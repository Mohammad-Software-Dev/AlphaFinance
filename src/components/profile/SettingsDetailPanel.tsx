import React from "react";
import BasicInfoEditPanel from "./Settings/BasicInfoEditPanel";
import NotificationsEditPanel from "./Settings/NotificationsEditPanel";
import DeleteAccountEditPanel from "./Settings/DeleteAccountEditPanel";
import SecurityEditPanel from "./Settings/SecurityEditPanel";
import PasswordEditPanel from "./Settings/PasswordEditPanel";
import SessionsEditPanel from "./Settings/SessionsEditPanel";
import TwoFactorEditPanel from "./Settings/TwoFactorEditPanel";

interface SettingsDetailPanelProps {
  sectionKey: string | null;
}

const SettingsDetailPanel: React.FC<SettingsDetailPanelProps> = ({
  sectionKey,
}) => {
  if (sectionKey === "basic-info") {
    return <BasicInfoEditPanel />;
  }

  if (sectionKey === "notifications") {
    return <NotificationsEditPanel />;
  }
  if (sectionKey === "delete-account") {
    return <DeleteAccountEditPanel />;
  }
  if (sectionKey === "security") {
    return <SecurityEditPanel />;
  }
  if (sectionKey === "password") {
    return <PasswordEditPanel />;
  }
  if (sectionKey === "2fa") {
    return <TwoFactorEditPanel />;
  }
  if (sectionKey === "sessions") {
    return <SessionsEditPanel />;
  }

  return <></>;
};

export default SettingsDetailPanel;
