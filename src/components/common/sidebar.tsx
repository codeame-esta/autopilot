'use client';

import {
  Home,
  Lightbulb,
  Zap,
  ArrowLeftRight,
  Wallet,
  Target,
  Settings,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router';
import AutopilotLogo from '@/assets/autopilot-logo.png';
import { useTranslation } from 'react-i18next';

const navItems = [
  {
    href: '/dashboard',
    label: 'COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.HOME',
    icon: Home,
  },
  {
    href: '/dashboard/insights',
    label: 'COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.INSIGHTS',
    icon: Lightbulb,
  },
  {
    href: '/dashboard/actions',
    label: 'COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.ACTIONS',
    icon: Zap,
  },
  {
    href: '/dashboard/transactions',
    label: 'COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.TRANSACTIONS',
    icon: ArrowLeftRight,
  },
  {
    href: '/dashboard/budgets',
    label: 'COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.BUDGETS',
    icon: Wallet,
  },
  {
    href: '/dashboard/goals',
    label: 'COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.GOALS',
    icon: Target,
  },
  {
    href: '/dashboard/settings',
    label: 'COMPONENTS.COMMON.SIDEBAR.NAV_ITEMS.SETTINGS',
    icon: Settings,
  },
];

export function Sidebar() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex h-16 items-center gap-2 px-6 py-14">
        <div className="flex items-center gap-3">
          <img className="w-10 h-10" src={AutopilotLogo} alt="Autopilot Logo" />
          <span
            className={cn('font-semibold tracking-wider text-xl text-white')}
          >
            AUTOPILOT
          </span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== '/dashboard' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              {t(item.label)}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground">
          <LogOut className="h-5 w-5" />
          {t('COMPONENTS.COMMON.SIDEBAR.LOG_OUT')}
        </button>
      </div>
    </aside>
  );
}
