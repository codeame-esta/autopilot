import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CreditCard, LinkIcon } from 'lucide-react'


export default function ConnectedAccountsCard() {
    return (
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
    )
}
