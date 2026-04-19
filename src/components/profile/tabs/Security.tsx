import React from "react";
import HorizontalDivider from "../../common/HorizontalDivider";
import SecurityEditPanel from "../Settings/SecurityEditPanel";
import TwoFactorEditPanel from "../Settings/TwoFactorEditPanel";
import SessionsEditPanel from "../Settings/SessionsEditPanel";

const Security: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <SecurityEditPanel />
      <HorizontalDivider className="border-light-silver my-8 self-stretch" />
      <TwoFactorEditPanel />
      <HorizontalDivider className="border-light-silver my-8 self-stretch" />
      <SessionsEditPanel />
    </div>
  );
};

export default Security;
