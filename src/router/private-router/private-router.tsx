import PrivateLayout from '@/layouts/private-layout';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import SettingsPage from '@/pages/settings/SettingsPage';
import { Navigate, Route, Routes } from 'react-router';
import type { ComponentType } from 'react';

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
      <Route path="settings" element={withPrivateLayout(SettingsPage)} />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}
