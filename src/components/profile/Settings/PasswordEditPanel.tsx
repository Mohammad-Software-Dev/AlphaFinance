import React, { useState } from "react";
import TextInput from "../../common/TextInput";
import { Button } from "../../common/Button";

const initialData = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

const PasswordEditPanel: React.FC = () => {
  const [savedData, setSavedData] = useState(initialData);
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStatus(null);
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const hasChanges = JSON.stringify(data) !== JSON.stringify(savedData);
  const passwordMismatch =
    data.newPassword.length > 0 &&
    data.confirmNewPassword.length > 0 &&
    data.newPassword !== data.confirmNewPassword;

  const canSave =
    hasChanges &&
    !passwordMismatch &&
    data.currentPassword.trim().length > 0 &&
    data.newPassword.trim().length > 0 &&
    data.confirmNewPassword.trim().length > 0;

  const handleCancel = () => {
    setData(savedData);
    setStatus("Changes discarded.");
  };

  const handleSave = () => {
    if (!canSave) return;
    setSavedData(data);
    setStatus("Password settings saved.");
  };

  return (
    <div className="flex flex-col min-h-[400px]">
      <h4 className="md:text-lg text-base mb-6 font-semibold md:font-normal">
        Change Password
      </h4>

      <div className="flex flex-col gap-6">
        <div>
          <TextInput
            id="currentPassword"
            name="currentPassword"
            placeholder="Current password"
            value={data.currentPassword}
            onChange={handleChange}
            type="password"
          />
        </div>
        <div>
          <TextInput
            id="newPassword"
            name="newPassword"
            placeholder="New password"
            value={data.newPassword}
            onChange={handleChange}
            type="password"
          />
        </div>
        <div>
          <TextInput
            id="confirmNewPassword"
            name="confirmNewPassword"
            placeholder="Confirm new password"
            value={data.confirmNewPassword}
            onChange={handleChange}
            type="password"
          />
        </div>
      </div>

      <div className="mt-10 mb-6">
        <div className="font-semibold text-lg mb-2">Password requirements</div>
        <div className="mb-2 text-base">
          Please follow this guide for a strong password:
        </div>
        <ul className="list-disc ml-6 text-base space-y-1">
          <li>One special characters</li>
          <li>Min 6 characters</li>
          <li>One number (2 are recommended)</li>
          <li>Change it often</li>
        </ul>
      </div>
      {passwordMismatch && (
        <p className="text-sm text-error mb-3">
          New password and confirmation must match.
        </p>
      )}
      {status && <p className="text-sm text-brand mb-3">{status}</p>}

      <div className="flex justify-end mt-8 gap-3">
        <Button variant="secondary" onClick={handleCancel} disabled={!hasChanges}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave} disabled={!canSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default PasswordEditPanel;
