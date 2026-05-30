import { useGetMe } from "@/hooks/user";
import { DashboardHeader, RecentActions, SpendingCategories } from "./components";
import { CashFlowChart } from "./components/cash-flow-chart";
import { StatCard } from "./components/state-card";
import { AlertTriangle, DollarSign, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DashboardPage() {
  const { data, isLoading } = useGetMe();
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <DashboardHeader
        userName={data?.first_name + " " + data?.last_name}
        profilePicture={data?.profile_picture}
        loading={isLoading}
      />
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-4 gap-4 flex-1">
          <StatCard
            title={t("PAGES.DASHBOARD.STAT_CARDS.MONEY_SAVED")}
            value="$432.50"
            change="↑ 18%"
            changeType="positive"
            icon={<DollarSign className="h-5 w-5" />}
          />
          <StatCard
            title={t("PAGES.DASHBOARD.STAT_CARDS.OPTIMIZATIONS") + " ⚡"}
            value="23"
            change="↑ 15%"
            changeType="positive"
          />
          <StatCard
            title={t("PAGES.DASHBOARD.STAT_CARDS.AUTO_ACTIONS")}
            value="47"
            change="↑ 22%"
            changeType="positive"
            icon={<Zap className="h-5 w-5" />}
          />
          <StatCard
            title={t("PAGES.DASHBOARD.STAT_CARDS.ANOMALIES_DETECTED")}
            value="5"
            changeType="neutral"
            icon={<AlertTriangle className="h-5 w-5" />}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3">
          <CashFlowChart />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <RecentActions />
        <SpendingCategories />
      </div>
    </div>
  );
}
