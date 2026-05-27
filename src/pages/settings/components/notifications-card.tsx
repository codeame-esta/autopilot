import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Bell } from 'lucide-react';

export default function NotificationsCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Bell className="h-5 w-5" />
          Notifications
        </CardTitle>
        <CardDescription>
          Configure how you receive notifications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-medium">Push notifications</p>
            <p className="text-sm text-muted-foreground">
              Receive notifications on your device
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-medium">Email notifications</p>
            <p className="text-sm text-muted-foreground">
              Receive weekly summaries via email
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-medium">Anomaly alerts</p>
            <p className="text-sm text-muted-foreground">
              Get notified when unusual activity is detected
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-medium">Goal reminders</p>
            <p className="text-sm text-muted-foreground">
              Receive updates on your savings goals
            </p>
          </div>
          <Switch defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
}
