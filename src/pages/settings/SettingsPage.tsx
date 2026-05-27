import { useTranslation } from "react-i18next";
import ProfileCard from "./components/profile-card";
import AppearanceCard from "./components/appearance-card";
import NotificationsCard from "./components/notifications-card";
import AutopilotSettingsCard from "./components/autopilot-settings-card";
import ConnectedAccountsCard from "./components/connected-accounts-card";
import SecurityCard from "./components/security-card";

export default function SettingsPage() {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{t("PAGES.SETTINGS.TITLE")}</h1>
        <p className="text-muted-foreground">{t("PAGES.SETTINGS.DESCRIPTION")}</p>
      </div>
      <div className="grid gap-6">
        <ProfileCard />
        <AppearanceCard />
        <NotificationsCard />
        <AutopilotSettingsCard />
        <ConnectedAccountsCard />
        <SecurityCard />
      </div>
    </div>
  );
}
