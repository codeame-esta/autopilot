import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import { useTranslation } from "react-i18next";


export default function ProfileCard() {
    const { t } = useTranslation();
    return (
        <Card className="bg-card">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                    <User className="h-5 w-5" />
                    {t('PAGES.SETTINGS.PROFILE.TITLE')}
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
                            {t('PAGES.SETTINGS.PROFILE.CHANGE_PHOTO')}
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name"> {t('PAGES.SETTINGS.PROFILE.FIELDS.FULL_NAME.LABEL')}</Label>
                        <Input id="name" defaultValue="Alex Johnson" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">{t('PAGES.SETTINGS.PROFILE.FIELDS.EMAIL.LABEL')}</Label>
                        <Input id="email" type="email" defaultValue="alex@email.com" />
                    </div>
                </div>
                <Button>{t('PAGES.SETTINGS.PROFILE.SUBMIT_BUTTON')}</Button>
            </CardContent>
        </Card>

    )
}
