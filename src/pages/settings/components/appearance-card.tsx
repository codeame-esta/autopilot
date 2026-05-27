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
import i18n from "@/i18n";

import { Globe, Monitor, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AppearanceCard() {
  const { t } = useTranslation();
  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Globe className="h-5 w-5" />
          {t("PAGES.SETTINGS.APPEARANCE.TITLE")}
        </CardTitle>
        <CardDescription>{t("PAGES.SETTINGS.APPEARANCE.SUB_TITLE")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label> {t("PAGES.SETTINGS.APPEARANCE.FIELDS.LANGUAGE.LABEL")}</Label>
          <Select defaultValue="es" onValueChange={handleChangeLanguage}>
            <SelectTrigger>
              <SelectValue
                placeholder={t("PAGES.SETTINGS.APPEARANCE.FIELDS.LANGUAGE.PLACEHOLDER")}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            {t("PAGES.SETTINGS.APPEARANCE.FIELDS.LANGUAGE.HELPER_TEXT")}
          </p>
        </div>
        <Separator />
        <div className="space-y-3">
          <Label> {t("PAGES.SETTINGS.APPEARANCE.FIELDS.THEME.LABEL")}</Label>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-primary bg-primary/5 transition-colors hover:bg-primary/10"
            >
              <div className="h-10 w-10 rounded-full bg-sidebar flex items-center justify-center">
                <Moon className="h-5 w-5 text-sidebar-foreground" />
              </div>
              <span className="text-sm font-medium">
                {t("PAGES.SETTINGS.APPEARANCE.FIELDS.THEME.OPTIONS.DARK")}
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border transition-colors hover:border-primary/50 hover:bg-muted/50"
            >
              <div className="h-10 w-10 rounded-full bg-white border flex items-center justify-center">
                <Sun className="h-5 w-5 text-amber-500" />
              </div>
              <span className="text-sm font-medium">
                {t("PAGES.SETTINGS.APPEARANCE.FIELDS.THEME.OPTIONS.LIGHT")}
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border transition-colors hover:border-primary/50 hover:bg-muted/50"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white to-sidebar flex items-center justify-center">
                <Monitor className="h-5 w-5 text-foreground" />
              </div>
              <span className="text-sm font-medium">
                {t("PAGES.SETTINGS.APPEARANCE.FIELDS.THEME.OPTIONS.SYSTEM")}
              </span>
            </button>
          </div>
          <p className="text-xs text-muted-foreground">
            {t("PAGES.SETTINGS.APPEARANCE.FIELDS.THEME.HELPER_TEXT")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
