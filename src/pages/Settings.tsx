import { useMemo, useState } from "react";
import GeneralLayout from "../components/layouts/GeneralLayout";
import SettingsSectionsList, {
  settingsSections,
} from "../components/profile/SettingsSectionsList";
import SettingsDetailPanel from "../components/profile/SettingsDetailPanel";

export default function SettingsPage() {
  const defaultSection = useMemo(() => settingsSections[0]?.key ?? "basic-info", []);
  const [sectionKey, setSectionKey] = useState<string>(defaultSection);

  return (
    <GeneralLayout title="Settings">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,1fr)_2fr] gap-8">
        <section>
          <SettingsSectionsList
            onEdit={(key) => setSectionKey(key)}
            currentSectionKey={sectionKey}
          />
        </section>
        <section className="border ui-border-subtle rounded-sm p-5 ui-surface">
          <SettingsDetailPanel sectionKey={sectionKey} />
        </section>
      </div>
    </GeneralLayout>
  );
}
