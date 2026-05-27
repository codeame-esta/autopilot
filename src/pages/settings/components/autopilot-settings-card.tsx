import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Zap } from 'lucide-react'

export default function AutopilotSettingsCard() {
    return (
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
    )
}
