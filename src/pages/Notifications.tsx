import { useMemo, useState } from "react";
import GeneralLayout from "../components/layouts/GeneralLayout";
import NotificationsEditPanel from "../components/profile/Settings/NotificationsEditPanel";

export default function NotificationsPage() {
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [items, setItems] = useState([
    {
      id: "n1",
      title: "Dividend Payout Processed",
      body: "Your quarterly payout for DXBBVP007 has been posted.",
      time: "2m ago",
      unread: true,
    },
    {
      id: "n2",
      title: "Transfer Settled",
      body: "Your transfer to wallet 02b...qid completed successfully.",
      time: "1h ago",
      unread: true,
    },
    {
      id: "n3",
      title: "Asset Update",
      body: "A new property update is available for DXBBW002.",
      time: "Yesterday",
      unread: false,
    },
  ]);

  const visibleItems = useMemo(
    () => (filter === "unread" ? items.filter((item) => item.unread) : items),
    [filter, items]
  );

  return (
    <GeneralLayout title="Notifications">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <section className="border ui-border-subtle rounded-sm p-5 ui-surface">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex gap-2">
              <button
                type="button"
                className={`px-3 py-1 rounded-sm text-sm focus-ring ${
                  filter === "all" ? "ui-surface-subtle text-brand" : "ui-text-muted"
                }`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                type="button"
                className={`px-3 py-1 rounded-sm text-sm focus-ring ${
                  filter === "unread" ? "ui-surface-subtle text-brand" : "ui-text-muted"
                }`}
                onClick={() => setFilter("unread")}
              >
                Unread
              </button>
            </div>
            <button
              type="button"
              className="text-sm text-brand underline focus-ring rounded-sm"
              onClick={() =>
                setItems((prev) => prev.map((item) => ({ ...item, unread: false })))
              }
            >
              Mark all as read
            </button>
          </div>

          {visibleItems.length === 0 ? (
            <p className="ui-text-muted py-4">No notifications in this filter.</p>
          ) : (
            <ul className="space-y-3">
              {visibleItems.map((item) => (
                <li
                  key={item.id}
                  className="border ui-border-subtle rounded-sm p-4 flex items-start justify-between gap-3"
                >
                  <div>
                    <p className="font-semibold ui-text-primary">{item.title}</p>
                    <p className="text-sm ui-text-muted mt-1">{item.body}</p>
                    <p className="text-xs ui-text-muted mt-2">{item.time}</p>
                  </div>
                  {item.unread && (
                    <button
                      type="button"
                      className="text-xs text-brand underline focus-ring rounded-sm"
                      onClick={() =>
                        setItems((prev) =>
                          prev.map((n) =>
                            n.id === item.id ? { ...n, unread: false } : n
                          )
                        )
                      }
                    >
                      Mark read
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="border ui-border-subtle rounded-sm p-5 ui-surface">
          <NotificationsEditPanel />
        </section>
      </div>
    </GeneralLayout>
  );
}
