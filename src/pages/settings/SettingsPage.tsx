'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Zap,
  Link as LinkIcon,
  Globe,
  Moon,
  Sun,
  Monitor,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function SettingsPage() {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{t('PAGES.SETTINGS.TITLE')}</h1>
        <p className="text-muted-foreground">
          {t('PAGES.SETTINGS.DESCRIPTION')}
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <User className="h-5 w-5" />
              {t('PAGES.SETTINGS.PROFILE')}
            </CardTitle>
            <CardDescription>
              {t('PAGES.SETTINGS.PERSONAL_INFO')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/avatar.jpg" alt="Alex" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  A
                </AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" size="sm">
                  Change photo
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" defaultValue="Alex Johnson" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="alex@email.com" />
              </div>
            </div>
            <Button>Save changes</Button>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Globe className="h-5 w-5" />
              Appearance
            </CardTitle>
            <CardDescription>
              Customize language and theme settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Language</Label>
              <Select defaultValue="en">
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="pt">Português</SelectItem>
                  <SelectItem value="zh">中文</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Select your preferred language for the interface
              </p>
            </div>
            <Separator />
            <div className="space-y-3">
              <Label>Theme</Label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-primary bg-primary/5 transition-colors hover:bg-primary/10"
                >
                  <div className="h-10 w-10 rounded-full bg-sidebar flex items-center justify-center">
                    <Moon className="h-5 w-5 text-sidebar-foreground" />
                  </div>
                  <span className="text-sm font-medium">Dark</span>
                </button>
                <button
                  type="button"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border transition-colors hover:border-primary/50 hover:bg-muted/50"
                >
                  <div className="h-10 w-10 rounded-full bg-white border flex items-center justify-center">
                    <Sun className="h-5 w-5 text-amber-500" />
                  </div>
                  <span className="text-sm font-medium">Light</span>
                </button>
                <button
                  type="button"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border transition-colors hover:border-primary/50 hover:bg-muted/50"
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white to-sidebar flex items-center justify-center">
                    <Monitor className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-sm font-medium">System</span>
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Choose how Autopilot looks to you
              </p>
            </div>
          </CardContent>
        </Card>

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

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Zap className="h-5 w-5" />
              Autopilot Settings
            </CardTitle>
            <CardDescription>
              Configure AI automation preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-medium">Enable Autopilot</p>
                <p className="text-sm text-muted-foreground">
                  Allow AI to take actions on your behalf
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-medium">Auto-optimize subscriptions</p>
                <p className="text-sm text-muted-foreground">
                  Automatically find better plans and deals
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-medium">Budget reallocation</p>
                <p className="text-sm text-muted-foreground">
                  Allow automatic budget adjustments
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Action approval threshold</Label>
              <Select defaultValue="25">
                <SelectTrigger>
                  <SelectValue placeholder="Select threshold" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">
                    $10 - Approve all actions above
                  </SelectItem>
                  <SelectItem value="25">
                    $25 - Approve all actions above
                  </SelectItem>
                  <SelectItem value="50">
                    $50 - Approve all actions above
                  </SelectItem>
                  <SelectItem value="100">
                    $100 - Approve all actions above
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Actions below this amount will be executed automatically
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <LinkIcon className="h-5 w-5" />
              Connected Accounts
            </CardTitle>
            <CardDescription>
              Manage your linked financial accounts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Chase Bank</p>
                  <p className="text-sm text-muted-foreground">
                    ****4582 • Connected
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">TD Ameritrade</p>
                  <p className="text-sm text-muted-foreground">
                    Investment account • Connected
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
            <Button variant="outline" className="w-full">
              <LinkIcon className="mr-2 h-4 w-4" />
              Connect new account
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Shield className="h-5 w-5" />
              Security
            </CardTitle>
            <CardDescription>Protect your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-medium">Two-factor authentication</p>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-medium">Password</p>
                <p className="text-sm text-muted-foreground">
                  Last changed 3 months ago
                </p>
              </div>
              <Button variant="outline" size="sm">
                Change
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
