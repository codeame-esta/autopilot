import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AutopilotSettingsCard() {
  const { t } = useTranslation();
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Zap className="h-5 w-5" />
          {t("PAGES.SETTINGS.AUTOPILOT_SETTINGS.TITLE")}
        </CardTitle>
        <CardDescription>{t("PAGES.SETTINGS.AUTOPILOT_SETTINGS.SUB_TITLE")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-medium">
              {t("PAGES.SETTINGS.AUTOPILOT_SETTINGS.FIELDS.ENABLE_AUTOPILOT.TITLE")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("PAGES.SETTINGS.AUTOPILOT_SETTINGS.FIELDS.ENABLE_AUTOPILOT.SUB_TITLE")}
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-medium">
              {t("PAGES.SETTINGS.AUTOPILOT_SETTINGS.FIELDS.AUTO_OPTIMIZE_SUSCRIPTIONS.TITLE")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("PAGES.SETTINGS.AUTOPILOT_SETTINGS.FIELDS.AUTO_OPTIMIZE_SUSCRIPTIONS.SUB_TITLE")}
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-medium">
              {t("PAGES.SETTINGS.AUTOPILOT_SETTINGS.FIELDS.BUDGET_REALLOCATION.TITLE")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("PAGES.SETTINGS.AUTOPILOT_SETTINGS.FIELDS.BUDGET_REALLOCATION.SUB_TITLE")}
            </p>
          </div>
          <Switch />
        </div>

        <Separator />
        <div className="space-y-2">
          <Label>
            {t("PAGES.SETTINGS.AUTOPILOT_SETTINGS.FIELDS.ACTION_APPROVAL_THRESHOLD.TITLE")}
          </Label>
          <Select defaultValue="25">
            <SelectTrigger>
              <SelectValue placeholder="Select threshold" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">
                {t(
                  "PAGES.SETTINGS.AUTOPILOT_SETTINGS.FIELDS.ACTION_APPROVAL_THRESHOLD.OPTIONS.TEN",
                )}
              </SelectItem>
              <SelectItem value="25">
                {t(
                  "PAGES.SETTINGS.AUTOPILOT_SETTINGS.FIELDS.ACTION_APPROVAL_THRESHOLD.OPTIONS.TWENTY_FIVE",
                )}
              </SelectItem>
              <SelectItem value="50">
                {t(
                  "PAGES.SETTINGS.AUTOPILOT_SETTINGS.FIELDS.ACTION_APPROVAL_THRESHOLD.OPTIONS.FIFTY",
                )}
              </SelectItem>
              <SelectItem value="100">
                {t(
                  "PAGES.SETTINGS.AUTOPILOT_SETTINGS.FIELDS.ACTION_APPROVAL_THRESHOLD.OPTIONS.ONE_HUNDRED",
                )}
              </SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            {t("PAGES.SETTINGS.AUTOPILOT_SETTINGS.FIELDS.ACTION_APPROVAL_THRESHOLD.HELPER_TEXT")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
