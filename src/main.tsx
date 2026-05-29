import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/router.tsx";
import "./i18n";
import { ThemeProvider } from "./components/common/theme-provider.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </QueryClientProvider>,
);
