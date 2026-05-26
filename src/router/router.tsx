import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import PrivateRouter from './private-router/private-router';
import PublicRouter from './public-router/public-router';

export default function Router() {
  const isAuthenticated = true; // Replace with actual authentication logic
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/dashboard/*" element={<PrivateRouter />} />
        ) : (
          <Route path="/auth/*" element={<PublicRouter />} />
        )}
        <Route
          path="*"
          element={
            <Navigate
              to={isAuthenticated ? '/dashboard' : '/auth/login'}
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
