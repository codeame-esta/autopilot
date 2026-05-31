import {
  Home,
  Lightbulb,
  Zap,
  ArrowLeftRight,
  Wallet,
  Target,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";
import AutopilotLogo from "@/assets/autopilot-logo.png";
import AutopilotLogoBlack from "@/assets/autopilot-logo-black-center.png";
import { useTranslation } from "react-i18next";
import { supabase } from "@/lib/supabase";

const navGroups = [
  {
    groupLabel: "COMPONENTS.COMMON.SIDEBAR.GROUPS.OVERVIEW",
    items: [
      {
        href: "/dashboard",
        label: "COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.HOME",
        icon: Home,
      },
    ],
  },
  {
    groupLabel: "COMPONENTS.COMMON.SIDEBAR.GROUPS.AUTOPILOT",
    items: [
      {
        href: "/dashboard/insights",
        label: "COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.INSIGHTS",
        icon: Lightbulb,
      },
      {
        href: "/dashboard/actions",
        label: "COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.ACTIONS",
        icon: Zap,
      },
    ],
  },
  {
    groupLabel: "COMPONENTS.COMMON.SIDEBAR.GROUPS.FINANCE",
    items: [
      {
        href: "/dashboard/transactions",
        label: "COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.TRANSACTIONS",
        icon: ArrowLeftRight,
      },
      {
        href: "/dashboard/budgets",
        label: "COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.BUDGETS",
        icon: Wallet,
      },
      {
        href: "/dashboard/goals",
        label: "COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.GOALS",
        icon: Target,
      },
    ],
  },
  {
    groupLabel: "COMPONENTS.COMMON.SIDEBAR.GROUPS.SETTINGS",
    items: [
      {
        href: "/dashboard/settings",
        label: "COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.SETTINGS",
        icon: Settings,
      },
    ],
  },
];

export function Sidebar() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-72 flex-col bg-white dark:bg-sidebar text-foreground dark:text-sidebar-foreground border-r border-border dark:border-sidebar-border">
      <div className="flex h-16 items-center gap-2 px-6 py-14">
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 hidden dark:block" src={AutopilotLogo} alt="Autopilot Logo" />
          <img
            className="w-10 h-10 block dark:hidden"
            src={AutopilotLogoBlack}
            alt="Autopilot Logo"
          />
          <span
            className={cn("font-semibold tracking-wider text-xl text-foreground dark:text-white")}
          >
            AUTOPILOT
          </span>
        </div>
      </div>

      <nav className="px-3 py-4 space-y-6">
        {navGroups.map((group) => (
          <div key={group.groupLabel}>
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-foreground/40 dark:text-sidebar-foreground/40">
              {t(group.groupLabel)}
            </p>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/dashboard" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-foreground/8 text-foreground dark:bg-white/10 dark:text-white font-semibold"
                        : "text-foreground/60 dark:text-sidebar-foreground/70 hover:bg-muted dark:hover:bg-sidebar-accent hover:text-foreground dark:hover:text-sidebar-foreground",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {t(item.label)}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="flex flex-1 items-center px-3">
        <div className="w-full rounded-xl bg-linear-to-br from-violet-600 to-violet-400 p-4 text-white">
          <p className="text-sm font-semibold">{t("COMPONENTS.COMMON.SIDEBAR.PRO_BANNER.TITLE")}</p>
          <p className="mt-1 text-xs opacity-80 leading-relaxed">
            {t("COMPONENTS.COMMON.SIDEBAR.PRO_BANNER.DESCRIPTION")}
          </p>
          <button className="mt-3 w-full rounded-lg bg-white/20 hover:bg-white/30 transition-colors px-3 py-1.5 text-xs font-semibold">
            {t("COMPONENTS.COMMON.SIDEBAR.PRO_BANNER.CTA")}
          </button>
        </div>
      </div>

      <div className="border-t border-border dark:border-sidebar-border p-3">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/60 dark:text-sidebar-foreground/70 transition-colors hover:bg-muted dark:hover:bg-sidebar-accent hover:text-foreground dark:hover:text-sidebar-foreground"
        >
          <LogOut className="h-5 w-5" />
          {t("COMPONENTS.COMMON.SIDEBAR.LOG_OUT")}
        </button>
      </div>
    </aside>
  );
}
