import React, { useState } from "react";
import PcIcon from "../../../assets/icons/pc.svg?react";
import MobileIcon from "../../../assets/icons/mobile.svg?react";
import { Button } from "../../common/Button";

const sessions = [
  {
    key: "session-1",
    deviceType: "pc",
    label: "Bucharest 68.133.163.201",
    info: "Your current session",
    status: "ACTIVE",
    location: "EU",
    showMore: true,
  },
  {
    key: "session-2",
    deviceType: "pc",
    label: "Chrome on macOS",
    info: "Session expired Mar 24.2024",
    status: "",
    location: "US",
    showMore: true,
  },
  {
    key: "session-3",
    deviceType: "mobile",
    label: "Safari on iPhone",
    info: "Session expired Mar 24.2024",
    status: "",
    location: "US",
    showMore: true,
  },
];

const SessionsEditPanel: React.FC = () => {
  const [savedSessions, setSavedSessions] = useState(sessions);
  const [rows, setRows] = useState(sessions);
  const [status, setStatus] = useState<string | null>(null);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const hasChanges = JSON.stringify(rows) !== JSON.stringify(savedSessions);

  const handleEndSession = (key: string) => {
    setStatus(null);
    setRows((prev) =>
      prev.map((session) =>
        session.key === key
          ? { ...session, status: "ENDED", info: "Session ended just now" }
          : session
      )
    );
  };

  const handleCancel = () => {
    setRows(savedSessions);
    setExpandedKey(null);
    setStatus("Changes discarded.");
  };

  const handleSave = () => {
    setSavedSessions(rows);
    setStatus("Session updates saved.");
  };

  return (
    <div className="">
      <h4 className="md:text-lg text-base mb-6 font-semibold md:font-normal">
        Sessions
      </h4>
      <div className="mb-6 text-sm text-dim-gray">
        This is a list of devices that have logged into your account. Remove
        those that you do not recognize.
      </div>
      <div className="flex flex-col">
        {rows.map((session, idx) => (
          <div
            key={session.key}
            className={`flex flex-col md:flex-row items-start md:items-center  justify-between py-4 border-b border-light-silver ${
              idx === rows.length - 1 ? "last:border-b-0" : ""
            }`}
          >
            <div className="flex flex-1 w-full">
              <div className="mr-4">
                {session.deviceType === "pc" ? (
                  <PcIcon className="w-7 h-7" />
                ) : (
                  <MobileIcon className="w-7 h-7" />
                )}
              </div>
              <div className="w-full">
                <div className="flex-1 min-w-0 w-full">
                  <div className="font-medium text-sm truncate">
                    {session.label}
                    {session.status && (
                      <span
                        className={`text-xs font-medium  px-3 py-1   text-black  mr-4
                  ${session.status === "ACTIVE" ? "text-verified-green" : "ui-text-muted"}`}
                      >
                        {session.status}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-dim-gray">{session.info}</div>
                </div>

                <div className=" md:hidden flex justify-between w-full md:w-fit ">
                  <span className="mr-4 text-sm text-dark-silver">
                    {session.location}
                  </span>
                  {session.showMore && (
                    <div className=" items-center">
                      <Button
                        className="text-sm"
                        variant="link"
                        onClick={() =>
                          setExpandedKey((prev) =>
                            prev === session.key ? null : session.key
                          )
                        }
                      >
                        {expandedKey === session.key ? "Hide" : "See More"}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-start w-full md:w-fit">
              <div className="flex  items-center">
                <span className="mr-4 text-sm text-dark-silver">
                  {session.location}
                </span>
                {session.showMore && (
                  <div className=" items-center">
                    <Button
                      variant="link"
                      onClick={() =>
                        setExpandedKey((prev) =>
                          prev === session.key ? null : session.key
                        )
                      }
                    >
                      {expandedKey === session.key ? "Hide" : "See More"}
                    </Button>
                  </div>
                )}
                {session.status !== "ENDED" && (
                  <Button variant="secondary" onClick={() => handleEndSession(session.key)}>
                    End Session
                  </Button>
                )}
              </div>
            </div>
            {expandedKey === session.key && (
              <div className="w-full mt-3 text-sm ui-text-muted">
                Session details: device tracking is simulated in demo mode.
              </div>
            )}
          </div>
        ))}
      </div>
      {status && <p className="text-sm text-brand mt-4">{status}</p>}
      <div className="flex gap-3 justify-end mt-8">
        <Button variant="secondary" onClick={handleCancel} disabled={!hasChanges}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave} disabled={!hasChanges}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default SessionsEditPanel;
