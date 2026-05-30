import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Bell } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NotificationsCard() {
  const { t } = useTranslation();
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Bell className="h-5 w-5" />
          {t("PAGES.SETTINGS.NOTIFICATIONS.TITLE")}
        </CardTitle>
        <CardDescription>{t("PAGES.SETTINGS.NOTIFICATIONS.SUB_TITLE")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-medium">{t("PAGES.SETTINGS.NOTIFICATIONS.FIELDS.EMAIL.TITLE")}</p>
            <p className="text-sm text-muted-foreground">
              {t("PAGES.SETTINGS.NOTIFICATIONS.FIELDS.EMAIL.SUB_TITLE")}
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-medium">{t("PAGES.SETTINGS.NOTIFICATIONS.FIELDS.GOAL.TITLE")}</p>
            <p className="text-sm text-muted-foreground">
              {t("PAGES.SETTINGS.NOTIFICATIONS.FIELDS.GOAL.SUB_TITLE")}
            </p>
          </div>
          <Switch defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
}
