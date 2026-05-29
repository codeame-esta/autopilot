import { AuthLayout } from "@/layouts/auth-layout";
import LoginPage from "@/pages/auth/login/LoginPage";
import RegisterPage from "@/pages/auth/register/RegisterPage";
import type { ComponentType } from "react";
import { Navigate, Route, Routes } from "react-router";

const withPrivateLayout = (Component: ComponentType) => {
  return (
    <AuthLayout>
      <Component />
    </AuthLayout>
  );
};

export default function PublicRouter() {
  return (
    <Routes>
      <Route path="login" element={withPrivateLayout(LoginPage)} />
      <Route path="register" element={withPrivateLayout(RegisterPage)} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
}
