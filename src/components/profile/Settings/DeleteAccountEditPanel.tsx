import { useState } from "react";
import { Button } from "../../common/Button";

const DeleteAccountEditPanel: React.FC = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleDeactivate = () => {
    setStatus("Account deactivation simulated in demo mode.");
  };

  const handleDelete = () => {
    if (!confirmed) return;
    setStatus("Account deletion request simulated in demo mode.");
  };

  return (
    <div>
      <h4 className="md:text-lg text-base mb-6 font-semibold md:font-normal">
        Delete Account
      </h4>
      <div className="">
        <div className="text-dim-gray mb-2 text-sm">
          Once you delete your account, there is no going back. Please be
          certain.
        </div>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            id="confirm-delete"
            className="accent-verified-green h-4 w-4 rounded-full"
            checked={confirmed}
            onChange={(e) => {
              setStatus(null);
              setConfirmed(e.target.checked);
            }}
          />
          <label
            htmlFor="confirm-delete"
            className="accent-verified-green text-sm select-none text-dark-silver"
          >
            Confirm I want to delete my account.
          </label>
        </div>
      </div>
      {status && <p className="text-sm text-brand mt-4">{status}</p>}
      <div className="flex justify-end mt-8 gap-3">
        <Button variant="secondary" onClick={handleDeactivate}>
          Deactivate
        </Button>
        <Button variant="primary" onClick={handleDelete} disabled={!confirmed}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteAccountEditPanel;
