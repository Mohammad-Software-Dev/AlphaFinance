import { Button } from "../../common/Button";

const DeleteAccountEditPanel: React.FC = () => {
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
          />
          <label
            htmlFor="confirm-delete"
            className="accent-verified-green text-sm select-none text-dark-silver"
          >
            Confirm I want to delete my account.
          </label>
        </div>
      </div>
      <div className="flex justify-end mt-8 gap-3">
        <Button variant="secondary" disabled>
          Deactivate
        </Button>
        <Button variant="primary">Delete</Button>
      </div>
    </div>
  );
};

export default DeleteAccountEditPanel;
