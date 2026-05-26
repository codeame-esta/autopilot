import LoginPage from '@/pages/auth/login/LoginPage';
import RegisterPage from '@/pages/auth/register/RegisterPage';
import { Navigate, Route, Routes } from 'react-router';

export default function PublicRouter() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
}
