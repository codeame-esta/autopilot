import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SecurityCard() {
  const { t } = useTranslation();
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Shield className="h-5 w-5" />
          {t("PAGES.SETTINGS.SECURITY.TITLE")}
        </CardTitle>
        <CardDescription>{t("PAGES.SETTINGS.SECURITY.SUB_TITLE")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-medium">{t("PAGES.SETTINGS.SECURITY.FIELDS.FACTOR.TITLE")}</p>
            <p className="text-sm text-muted-foreground">
              {t("PAGES.SETTINGS.SECURITY.FIELDS.FACTOR.SUB_TITLE")}
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-medium"> {t("PAGES.SETTINGS.SECURITY.FIELDS.PASSWORD.TITLE")}</p>
            <p className="text-sm text-muted-foreground">
              {t("PAGES.SETTINGS.SECURITY.FIELDS.PASSWORD.SUB_TITLE")}
            </p>
          </div>
          <Button variant="outline" size="sm">
            {t("PAGES.SETTINGS.SECURITY.FIELDS.PASSWORD.BUTTON")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
