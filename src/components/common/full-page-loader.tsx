import AutopilotLogo from "@/assets/autopilot-logo.png";

export function FullPageLoader() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 bg-sidebar">
      <div className="relative flex items-center justify-center">
        <span className="absolute h-16 w-16 animate-spin rounded-full border-4 border-sidebar-accent border-t-primary" />
        <img src={AutopilotLogo} alt="Autopilot" className="h-8 w-8" />
      </div>
      <span className="text-sm font-medium tracking-widest text-sidebar-foreground/50 uppercase">
        Autopilot
      </span>
    </div>
  );
}
