import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: React.ReactNode;
}

export function StatCard({ title, value, change, changeType = "neutral", icon }: StatCardProps) {
  const { t } = useTranslation();
  return (
    <Card className="bg-card">
      <CardContent className="px-5">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-semibold text-card-foreground">{value}</p>
            {change && (
              <div
                className={cn(
                  "flex items-center gap-1 text-sm",
                  changeType === "positive" && "text-success",
                  changeType === "negative" && "text-destructive",
                  changeType === "neutral" && "text-muted-foreground",
                )}
              >
                {changeType === "positive" && <ArrowUpRight className="h-3 w-3" />}
                {changeType === "negative" && <ArrowDownRight className="h-3 w-3" />}
                <span>
                  {change} {t("PAGES.DASHBOARD.STAT_CARDS.VS_LAST_MONTH")}
                </span>
              </div>
            )}
          </div>
          {icon && <div className="text-primary">{icon}</div>}
        </div>
      </CardContent>
    </Card>
  );
}
