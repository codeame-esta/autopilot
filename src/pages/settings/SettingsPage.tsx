import { useTranslation } from "react-i18next";
import ProfileCard from "./components/profile-card";
import AppearanceCard from "./components/appearance-card";
import NotificationsCard from "./components/notifications-card";
import AutopilotSettingsCard from "./components/autopilot-settings-card";
import SecurityCard from "./components/security-card";
import { useGetMe } from "@/hooks/user";

export default function SettingsPage() {
  const { t } = useTranslation();
  const { data, isLoading } = useGetMe();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{t("PAGES.SETTINGS.TITLE")}</h1>
        <p className="text-muted-foreground">{t("PAGES.SETTINGS.DESCRIPTION")}</p>
      </div>
      <div className="grid gap-6">
        <ProfileCard
          isLoading={isLoading}
          profilePicture={data?.profile_picture}
          fullName={data?.first_name + " " + data?.last_name}
          email={data?.email}
        />
        <AppearanceCard />
        <NotificationsCard />
        <AutopilotSettingsCard />
        <SecurityCard />
      </div>
    </div>
  );
}
