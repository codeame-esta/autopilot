import { useTheme } from "next-themes";
import AutopilotLogo from "@/assets/autopilot-logo.png";
import AutopilotLogoBlackCenter from "@/assets/autopilot-logo-black-center.png";

export function FullPageLoader() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 bg-background">
      <div className="relative flex items-center justify-center">
        <span className="absolute h-16 w-16 animate-spin rounded-full border-4 border-muted border-t-primary" />
        <img
          src={resolvedTheme === "dark" ? AutopilotLogo : AutopilotLogoBlackCenter}
          alt="Autopilot"
          className="h-8 w-8"
        />
      </div>
      <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
        Autopilot
      </span>
    </div>
  );
}
