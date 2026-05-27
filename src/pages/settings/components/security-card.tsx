import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Shield } from 'lucide-react'

export default function SecurityCard() {
    return (
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
    )
}
