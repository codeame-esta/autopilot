import { useTranslation } from "react-i18next";

export default function InsightsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{t("PAGES.INSIGHTS.TITLE")}</h1>
        <p className="text-muted-foreground">{t("PAGES.INSIGHTS.DESCRIPTION")}</p>
      </div>
    </div>
  );
}
