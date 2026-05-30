import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, RefreshCw, ArrowDownRight, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export function RecentActions() {
  const { t } = useTranslation();

  const actions = [
    {
      id: 1,
      icon: RefreshCw,
      title: t("PAGES.DASHBOARD.RECENT_ACTIONS.ACTIONS.SUBSCRIPTION_OPTIMIZED.TITLE"),
      description: t("PAGES.DASHBOARD.RECENT_ACTIONS.ACTIONS.SUBSCRIPTION_OPTIMIZED.DESCRIPTION"),
      date: "May 21",
    },
    {
      id: 2,
      icon: ArrowDownRight,
      title: t("PAGES.DASHBOARD.RECENT_ACTIONS.ACTIONS.OVERSPENDING_REDUCED.TITLE"),
      description: t("PAGES.DASHBOARD.RECENT_ACTIONS.ACTIONS.OVERSPENDING_REDUCED.DESCRIPTION"),
      date: "May 20",
    },
    {
      id: 3,
      icon: Zap,
      title: t("PAGES.DASHBOARD.RECENT_ACTIONS.ACTIONS.BUDGET_REALLOCATED.TITLE"),
      description: t("PAGES.DASHBOARD.RECENT_ACTIONS.ACTIONS.BUDGET_REALLOCATED.DESCRIPTION"),
      date: "May 19",
    },
  ];

  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">
          {t("PAGES.DASHBOARD.RECENT_ACTIONS.TITLE")}
        </CardTitle>
        <Button variant="link" className="h-auto p-0 text-primary">
          {t("PAGES.DASHBOARD.RECENT_ACTIONS.VIEW_ALL")}
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {actions.map((action) => (
          <div
            key={action.id}
            className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
              <action.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">{action.title}</p>
              <p className="text-xs text-success">{action.description}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs text-muted-foreground">{action.date}</span>
              <Check className="h-4 w-4 text-success" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
