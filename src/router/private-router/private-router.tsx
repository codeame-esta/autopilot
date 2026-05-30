import PrivateLayout from "@/layouts/private-layout";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import InsightsPage from "@/pages/insights/InsightsPage";
import ActionsPage from "@/pages/actions/ActionsPage";
import TransactionsPage from "@/pages/transactions/TransactionsPage";
import BudgetsPage from "@/pages/budgets/BudgetsPage";
import GoalsPage from "@/pages/goals/GoalsPage";
import SettingsPage from "@/pages/settings/SettingsPage";
import { Navigate, Route, Routes } from "react-router";
import type { ComponentType } from "react";

const withPrivateLayout = (Component: ComponentType) => {
  return (
    <PrivateLayout>
      <Component />
    </PrivateLayout>
  );
};

export default function PrivateRouter() {
  return (
    <Routes>
      <Route index element={withPrivateLayout(DashboardPage)} />
      <Route path="insights" element={withPrivateLayout(InsightsPage)} />
      <Route path="actions" element={withPrivateLayout(ActionsPage)} />
      <Route path="transactions" element={withPrivateLayout(TransactionsPage)} />
      <Route path="budgets" element={withPrivateLayout(BudgetsPage)} />
      <Route path="goals" element={withPrivateLayout(GoalsPage)} />
      <Route path="settings" element={withPrivateLayout(SettingsPage)} />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}
