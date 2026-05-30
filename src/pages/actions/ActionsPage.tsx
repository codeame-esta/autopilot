import { useTranslation } from "react-i18next";

export default function ActionsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{t("PAGES.ACTIONS.TITLE")}</h1>
        <p className="text-muted-foreground">{t("PAGES.ACTIONS.DESCRIPTION")}</p>
      </div>
    </div>
  );
}
