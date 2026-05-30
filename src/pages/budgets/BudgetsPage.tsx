import { useTranslation } from "react-i18next";

export default function BudgetsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{t("PAGES.BUDGETS.TITLE")}</h1>
        <p className="text-muted-foreground">{t("PAGES.BUDGETS.DESCRIPTION")}</p>
      </div>
    </div>
  );
}
