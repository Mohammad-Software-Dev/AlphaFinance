import React, { useState } from "react";
import TextInput from "../../common/TextInput";
import { Button } from "../../common/Button";

const initialData = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

const PasswordEditPanel: React.FC = () => {
  const [data, setData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
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

      <div className="flex justify-end mt-8 gap-3">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save </Button>
      </div>
    </div>
  );
};

export default PasswordEditPanel;
