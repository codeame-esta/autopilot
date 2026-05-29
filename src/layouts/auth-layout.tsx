import AutopilotLogo from "@/assets/autopilot-logo.png";
import AutopilotLogoBlack from "@/assets/autopilot-logo-black-center.png.png";

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h3a3 3 0 0 1 3 3v1a2 2 0 0 1-2 2h-1v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3H6a2 2 0 0 1-2-2v-1a3 3 0 0 1 3-3h3V9.5A4 4 0 0 1 12 2z" />
        <circle cx="12" cy="6" r="1" fill="currentColor" />
        <path d="M9 17h6M10 20h4" />
      </svg>
    ),
    text: "AI that understands your financial behavior",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 5-6" />
        <path d="M18 10l2-2M18 8h2v2" />
      </svg>
    ),
    text: "Detects opportunities and reduces waste",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    text: "Works on your behalf, 24/7",
  },
];

function WaveMesh() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-72 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1200 300"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="meshGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2563FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="meshGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2563FF" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M0,280 Q150,200 300,240 T600,200 T900,240 T1200,200 L1200,300 L0,300 Z"
          fill="url(#meshGradient1)"
          opacity="0.3"
        />
        <path
          d="M0,260 Q200,180 400,220 T800,180 T1200,220 L1200,300 L0,300 Z"
          fill="url(#meshGradient2)"
          opacity="0.2"
        />

        <path
          d="M0,250 Q150,190 300,220 Q450,250 600,210 Q750,170 900,200 Q1050,230 1200,190"
          stroke="#2563FF"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M0,230 Q200,180 400,210 Q600,240 800,190 Q1000,140 1200,180"
          stroke="#22D3EE"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M0,270 Q100,220 250,250 Q400,280 550,230 Q700,180 850,220 Q1000,260 1200,210"
          stroke="#2563FF"
          strokeWidth="0.5"
          fill="none"
          opacity="0.2"
        />

        {[
          { cx: 50, cy: 180, r: 2 },
          { cx: 120, cy: 195, r: 1.5 },
          { cx: 180, cy: 175, r: 2.5 },
          { cx: 250, cy: 200, r: 1.8 },
          { cx: 320, cy: 185, r: 2 },
          { cx: 400, cy: 210, r: 1.5 },
          { cx: 480, cy: 190, r: 2.2 },
          { cx: 550, cy: 205, r: 1.8 },
          { cx: 630, cy: 180, r: 2 },
          { cx: 710, cy: 195, r: 1.5 },
          { cx: 790, cy: 175, r: 2.5 },
          { cx: 870, cy: 200, r: 1.8 },
          { cx: 950, cy: 185, r: 2 },
          { cx: 1030, cy: 195, r: 1.5 },
          { cx: 1120, cy: 180, r: 2 },
          { cx: 80, cy: 220, r: 1.8 },
          { cx: 150, cy: 235, r: 2 },
          { cx: 230, cy: 215, r: 1.5 },
          { cx: 310, cy: 240, r: 2.2 },
          { cx: 390, cy: 225, r: 1.8 },
          { cx: 470, cy: 245, r: 2 },
          { cx: 560, cy: 220, r: 1.5 },
          { cx: 640, cy: 238, r: 2 },
          { cx: 720, cy: 218, r: 1.8 },
          { cx: 800, cy: 235, r: 2.2 },
          { cx: 880, cy: 222, r: 1.5 },
          { cx: 960, cy: 240, r: 2 },
          { cx: 1050, cy: 225, r: 1.8 },
          { cx: 1140, cy: 235, r: 2 },
          { cx: 40, cy: 255, r: 2 },
          { cx: 110, cy: 268, r: 1.5 },
          { cx: 200, cy: 250, r: 2.2 },
          { cx: 280, cy: 272, r: 1.8 },
          { cx: 360, cy: 258, r: 2 },
          { cx: 450, cy: 275, r: 1.5 },
          { cx: 530, cy: 260, r: 2 },
          { cx: 620, cy: 270, r: 1.8 },
          { cx: 700, cy: 255, r: 2.2 },
          { cx: 780, cy: 268, r: 1.5 },
          { cx: 860, cy: 258, r: 2 },
          { cx: 940, cy: 272, r: 1.8 },
          { cx: 1020, cy: 262, r: 2 },
          { cx: 1100, cy: 270, r: 1.5 },
          { cx: 1180, cy: 260, r: 2 },
        ].map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="#22D3EE"
            opacity={0.4 + (i % 3) * 0.2}
            filter="url(#glow)"
          />
        ))}

        <g stroke="#2563FF" strokeWidth="0.3" opacity="0.2">
          <line x1="50" y1="180" x2="120" y2="195" />
          <line x1="120" y1="195" x2="180" y2="175" />
          <line x1="250" y1="200" x2="320" y2="185" />
          <line x1="400" y1="210" x2="480" y2="190" />
          <line x1="550" y1="205" x2="630" y2="180" />
          <line x1="710" y1="195" x2="790" y2="175" />
          <line x1="870" y1="200" x2="950" y2="185" />
          <line x1="80" y1="220" x2="150" y2="235" />
          <line x1="310" y1="240" x2="390" y2="225" />
          <line x1="560" y1="220" x2="640" y2="238" />
          <line x1="800" y1="235" x2="880" y2="222" />
          <line x1="1050" y1="225" x2="1140" y2="235" />
        </g>
      </svg>
    </div>
  );
}

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background dark:bg-sidebar overflow-hidden">
      <WaveMesh />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-6 lg:gap-36 lg:px-16">
        <div className="hidden lg:flex lg:flex-col lg:max-w-md">
          <div className="flex flex-col items-center">
            <img src={AutopilotLogo} alt="Autopilot Logo" className="w-24 h-24 hidden dark:block" />
            <img
              src={AutopilotLogoBlack}
              alt="Autopilot Logo"
              className="w-24 h-24 block dark:hidden"
            />
            <h1 className="mt-6 text-3xl font-semibold tracking-wide text-foreground dark:text-sidebar-foreground">
              AUTOPILOT
            </h1>
            <p className="mt-3 text-base text-foreground/70 dark:text-sidebar-foreground/70">
              <span className="text-accent">Intelligent</span> finances, on autopilot.
            </p>
          </div>

          <div className="mt-16 space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <span className="text-sm text-foreground/80 dark:text-sidebar-foreground/80">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-md">
          <div className="lg:hidden flex flex-col items-center mb-8">
            <img src={AutopilotLogo} alt="Autopilot Logo" className="w-14 h-14 hidden dark:block" />
            <img
              src={AutopilotLogoBlack}
              alt="Autopilot Logo"
              className="w-14 h-14 block dark:hidden"
            />
            <h1 className="mt-3 text-lg font-semibold text-foreground dark:text-sidebar-foreground">
              AUTOPILOT
            </h1>
          </div>

          <div className="rounded-2xl bg-card p-8 shadow-2xl shadow-black/10 dark:shadow-black/20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
