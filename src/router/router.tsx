import LoginPage from '@/pages/auth/login/LoginPage';
import RegisterPage from '@/pages/auth/register/RegisterPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
