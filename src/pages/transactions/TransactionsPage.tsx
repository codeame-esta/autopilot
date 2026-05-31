import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  ShoppingBag,
  Coffee,
  Car,
  Home,
  Zap,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const transactions = [
  {
    id: 1,
    icon: ShoppingBag,
    merchant: "Amazon",
    category: "Shopping",
    date: "May 21, 2024",
    amount: -89.99,
    status: "completed",
  },
  {
    id: 2,
    icon: Coffee,
    merchant: "Starbucks",
    category: "Food & Dining",
    date: "May 21, 2024",
    amount: -12.5,
    status: "completed",
  },
  {
    id: 3,
    icon: Zap,
    merchant: "Salary Deposit",
    category: "Income",
    date: "May 20, 2024",
    amount: 5430.0,
    status: "completed",
  },
  {
    id: 4,
    icon: Car,
    merchant: "Uber",
    category: "Transport",
    date: "May 20, 2024",
    amount: -24.8,
    status: "completed",
  },
  {
    id: 5,
    icon: Home,
    merchant: "Rent Payment",
    category: "Housing",
    date: "May 19, 2024",
    amount: -1420.0,
    status: "completed",
  },
  {
    id: 6,
    icon: CreditCard,
    merchant: "Netflix",
    category: "Entertainment",
    date: "May 18, 2024",
    amount: -15.99,
    status: "completed",
  },
  {
    id: 7,
    icon: ShoppingBag,
    merchant: "Target",
    category: "Shopping",
    date: "May 18, 2024",
    amount: -156.32,
    status: "flagged",
  },
  {
    id: 8,
    icon: Coffee,
    merchant: "Whole Foods",
    category: "Food & Dining",
    date: "May 17, 2024",
    amount: -87.45,
    status: "completed",
  },
];

export default function TransactionsPage() {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{t("PAGES.TRANSACTIONS.TITLE")}</h1>
          <p className="text-muted-foreground">{t("PAGES.TRANSACTIONS.DESCRIPTION")}</p>
        </div>
        <Button>{t("PAGES.TRANSACTIONS.ADD_TRANSACTION")}</Button>
      </div>

      <Card className="bg-card">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder={t("PAGES.TRANSACTIONS.SEARCH_PLACEHOLDER")} className="pl-9" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder={t("PAGES.TRANSACTIONS.FILTERS.CATEGORY.PLACEHOLDER")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("PAGES.TRANSACTIONS.FILTERS.CATEGORY.ALL")}</SelectItem>
                <SelectItem value="shopping">
                  {t("PAGES.TRANSACTIONS.FILTERS.CATEGORY.SHOPPING")}
                </SelectItem>
                <SelectItem value="food">
                  {t("PAGES.TRANSACTIONS.FILTERS.CATEGORY.FOOD_AND_DINING")}
                </SelectItem>
                <SelectItem value="transport">
                  {t("PAGES.TRANSACTIONS.FILTERS.CATEGORY.TRANSPORT")}
                </SelectItem>
                <SelectItem value="housing">
                  {t("PAGES.TRANSACTIONS.FILTERS.CATEGORY.HOUSING")}
                </SelectItem>
                <SelectItem value="entertainment">
                  {t("PAGES.TRANSACTIONS.FILTERS.CATEGORY.ENTERTAINMENT")}
                </SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="this-month">
              <SelectTrigger className="w-40">
                <SelectValue placeholder={t("PAGES.TRANSACTIONS.FILTERS.PERIOD.PLACEHOLDER")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-month">
                  {t("PAGES.TRANSACTIONS.FILTERS.PERIOD.THIS_MONTH")}
                </SelectItem>
                <SelectItem value="last-month">
                  {t("PAGES.TRANSACTIONS.FILTERS.PERIOD.LAST_MONTH")}
                </SelectItem>
                <SelectItem value="3-months">
                  {t("PAGES.TRANSACTIONS.FILTERS.PERIOD.THREE_MONTHS")}
                </SelectItem>
                <SelectItem value="all-time">
                  {t("PAGES.TRANSACTIONS.FILTERS.PERIOD.ALL_TIME")}
                </SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card">
        <CardContent className="p-0">
          <div className="divide-y">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      transaction.amount > 0 ? "bg-success/10" : "bg-muted",
                    )}
                  >
                    <transaction.icon
                      className={cn(
                        "h-5 w-5",
                        transaction.amount > 0 ? "text-success" : "text-muted-foreground",
                      )}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{transaction.merchant}</p>
                      {transaction.status === "flagged" && (
                        <Badge
                          variant="outline"
                          className="bg-warning/10 text-warning border-warning/20 text-xs"
                        >
                          {t("PAGES.TRANSACTIONS.FLAGGED")}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{transaction.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-muted-foreground">{transaction.date}</span>
                  <div className="flex items-center gap-1 min-w-24 justify-end">
                    {transaction.amount > 0 ? (
                      <ArrowUpRight className="h-4 w-4 text-success" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span
                      className={cn(
                        "font-medium",
                        transaction.amount > 0 ? "text-success" : "text-foreground",
                      )}
                    >
                      {transaction.amount > 0 ? "+" : ""}$
                      {Math.abs(transaction.amount).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {t("PAGES.TRANSACTIONS.PAGINATION.SHOWING", { from: 1, to: 8, total: 156 })}
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            {t("PAGES.TRANSACTIONS.PAGINATION.PREVIOUS")}
          </Button>
          <Button variant="outline" size="sm">
            {t("PAGES.TRANSACTIONS.PAGINATION.NEXT")}
          </Button>
        </div>
      </div>
    </div>
  );
}
