import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface DashboardHeaderProps {
  userName?: string;
}

export function DashboardHeader({
  userName = 'Ignacio',
}: DashboardHeaderProps) {
  const { t } = useTranslation();
  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? t('PAGES.DASHBOARD.GOOD_MORNING', { user: userName })
      : hour < 18
        ? t('PAGES.DASHBOARD.GOOD_AFTERNOON', { user: userName })
        : t('PAGES.DASHBOARD.GOOD_EVENING', { user: userName });

  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          {greeting} 👋
        </h1>
        <p className="text-sm text-muted-foreground">
          {t('PAGES.DASHBOARD.AUTOPILOT_RUNNING')}
          <span className="inline-block h-2 w-2 rounded-full bg-success ml-1"></span>
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary" />
        </Button>
        <Avatar>
          <AvatarImage src="/avatar.jpg" alt={userName} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {userName.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
