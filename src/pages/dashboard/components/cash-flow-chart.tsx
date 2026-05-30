import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTranslation } from "react-i18next";

const data = [
  { name: "May 1", income: 4200, expenses: 3100 },
  { name: "May 8", income: 4500, expenses: 3400 },
  { name: "May 15", income: 5200, expenses: 3800 },
  { name: "May 22", income: 5430, expenses: 4230 },
  { name: "May 31", income: 5430, expenses: 3620 },
];

export function CashFlowChart() {
  const { t } = useTranslation();

  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base font-medium">
            {t("PAGES.DASHBOARD.CASH_FLOW.TITLE")}
          </CardTitle>
          <div className="mt-2 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">{t("PAGES.DASHBOARD.CASH_FLOW.INCOME")}</span>
              <span className="font-medium">$5,430</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-muted-foreground">
                {t("PAGES.DASHBOARD.CASH_FLOW.EXPENSES")}
              </span>
              <span className="font-medium">$4,728</span>
            </div>
          </div>
        </div>
        <Select defaultValue="this-month">
          <SelectTrigger className="w-32">
            <SelectValue placeholder={t("PAGES.DASHBOARD.CASH_FLOW.PERIOD_PLACEHOLDER")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">
              {t("PAGES.DASHBOARD.CASH_FLOW.PERIODS.THIS_MONTH")}
            </SelectItem>
            <SelectItem value="last-month">
              {t("PAGES.DASHBOARD.CASH_FLOW.PERIODS.LAST_MONTH")}
            </SelectItem>
            <SelectItem value="3-months">
              {t("PAGES.DASHBOARD.CASH_FLOW.PERIODS.THREE_MONTHS")}
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563FF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2563FF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22D3EE" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                className="text-xs text-muted-foreground"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                className="text-xs text-muted-foreground"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                  borderRadius: "8px",
                }}
                formatter={(value) => [`$${Number(value).toLocaleString()}`, ""]}
              />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#2563FF"
                strokeWidth={2}
                fill="url(#incomeGradient)"
                name={t("PAGES.DASHBOARD.CASH_FLOW.INCOME")}
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="#22D3EE"
                strokeWidth={2}
                fill="url(#expensesGradient)"
                name={t("PAGES.DASHBOARD.CASH_FLOW.EXPENSES")}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
