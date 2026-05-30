import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useTranslation } from "react-i18next";

const data = [
  {
    nameKey: "PAGES.DASHBOARD.SPENDING_CATEGORIES.CATEGORIES.HOUSING",
    value: 1420,
    percentage: 30,
    color: "#2563FF",
  },
  {
    nameKey: "PAGES.DASHBOARD.SPENDING_CATEGORIES.CATEGORIES.FOOD_AND_DINING",
    value: 946,
    percentage: 20,
    color: "#22D3EE",
  },
  {
    nameKey: "PAGES.DASHBOARD.SPENDING_CATEGORIES.CATEGORIES.TRANSPORT",
    value: 710,
    percentage: 15,
    color: "#0B0F1A",
  },
  {
    nameKey: "PAGES.DASHBOARD.SPENDING_CATEGORIES.CATEGORIES.SHOPPING",
    value: 473,
    percentage: 10,
    color: "#64748b",
  },
  {
    nameKey: "PAGES.DASHBOARD.SPENDING_CATEGORIES.CATEGORIES.ENTERTAINMENT",
    value: 378,
    percentage: 8,
    color: "#94a3b8",
  },
  {
    nameKey: "PAGES.DASHBOARD.SPENDING_CATEGORIES.CATEGORIES.OTHERS",
    value: 801,
    percentage: 17,
    color: "#cbd5e1",
  },
];
export function SpendingCategories() {
  const { t } = useTranslation();

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">
          {t("PAGES.DASHBOARD.SPENDING_CATEGORIES.TITLE")}
        </CardTitle>
        <Select defaultValue="this-month">
          <SelectTrigger className="w-32">
            <SelectValue
              placeholder={t("PAGES.DASHBOARD.SPENDING_CATEGORIES.PERIOD_PLACEHOLDER")}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">
              {t("PAGES.DASHBOARD.SPENDING_CATEGORIES.PERIODS.THIS_MONTH")}
            </SelectItem>
            <SelectItem value="last-month">
              {t("PAGES.DASHBOARD.SPENDING_CATEGORIES.PERIODS.LAST_MONTH")}
            </SelectItem>
            <SelectItem value="3-months">
              {t("PAGES.DASHBOARD.SPENDING_CATEGORIES.PERIODS.THREE_MONTHS")}
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6">
          <div className="relative">
            <ResponsiveContainer width={150} height={150}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={52}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-semibold">${total.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground">
                {t("PAGES.DASHBOARD.SPENDING_CATEGORIES.TOTAL_SPENT")}
              </span>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            {data.map((item) => (
              <div key={item.nameKey} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">{t(item.nameKey)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">{item.percentage}%</span>
                  <span className="font-medium">${item.value.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
