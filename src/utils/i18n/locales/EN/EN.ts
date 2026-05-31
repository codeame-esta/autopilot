export const EnglishLanguage = {
  COMPONENTS: {
    COMMON: {
      SIDEBAR: {
        NAV_ITEMS: {
          HOME: "Home",
          INSIGHTS: "Insights",
          ACTIONS: "Actions",
          TRANSACTIONS: "Transactions",
          BUDGETS: "Budgets",
          GOALS: "Goals",
          SETTINGS: "Settings",
        },
        LOG_OUT: "Log Out",
      },
    },
  },
  PAGES: {
    DASHBOARD: {
      AUTOPILOT_RUNNING: "Your autopilot is running",
      GOOD_MORNING: "Good morning, {{user}}!",
      GOOD_AFTERNOON: "Good afternoon, {{user}}!",
      GOOD_EVENING: "Good evening, {{user}}!",
      STAT_CARDS: {
        MONEY_SAVED: "Money saved",
        OPTIMIZATIONS: "Optimizations",
        AUTO_ACTIONS: "Auto actions",
        ANOMALIES_DETECTED: "Anomalies detected",
        VS_LAST_MONTH: "vs last month",
      },
      CASH_FLOW: {
        TITLE: "Cash flow",
        INCOME: "Income",
        EXPENSES: "Expenses",
        PERIOD_PLACEHOLDER: "Period",
        PERIODS: {
          THIS_MONTH: "This month",
          LAST_MONTH: "Last month",
          THREE_MONTHS: "3 months",
        },
      },
      RECENT_ACTIONS: {
        TITLE: "Recent actions",
        VIEW_ALL: "View all",
        ACTIONS: {
          SUBSCRIPTION_OPTIMIZED: {
            TITLE: "Subscription optimized",
            DESCRIPTION: "You saved $12.90",
          },
          OVERSPENDING_REDUCED: {
            TITLE: "Overspending reduced",
            DESCRIPTION: "You saved $26.40",
          },
          BUDGET_REALLOCATED: {
            TITLE: "Budget reallocated",
            DESCRIPTION: "Reallocated $60.00 to Savings",
          },
        },
      },
      SPENDING_CATEGORIES: {
        TITLE: "Top spending categories",
        TOTAL_SPENT: "Total spent",
        PERIOD_PLACEHOLDER: "Period",
        PERIODS: {
          THIS_MONTH: "This month",
          LAST_MONTH: "Last month",
          THREE_MONTHS: "3 months",
        },
        CATEGORIES: {
          HOUSING: "Housing",
          FOOD_AND_DINING: "Food & Dining",
          TRANSPORT: "Transport",
          SHOPPING: "Shopping",
          ENTERTAINMENT: "Entertainment",
          OTHERS: "Others",
        },
      },
    },
    INSIGHTS: {
      TITLE: "Insights",
      DESCRIPTION: "AI-powered insights about your finances",
    },
    ACTIONS: {
      TITLE: "Actions",
      DESCRIPTION: "Automated actions taken by your autopilot",
    },
    TRANSACTIONS: {
      TITLE: "Transactions",
      DESCRIPTION: "View and manage your transaction history",
    },
    BUDGETS: {
      TITLE: "Budgets",
      DESCRIPTION: "Track and manage your spending budgets",
    },
    GOALS: {
      TITLE: "Goals",
      DESCRIPTION: "Set and track your financial goals",
    },
    SETTINGS: {
      TITLE: "Settings",
      DESCRIPTION: "Manage your account and preferences",
      PERSONAL_INFO: "Personal Information",
      PROFILE: {
        TITLE: "Profile",
        CHANGE_PHOTO: "Change Photo",
        FIELDS: {
          FULL_NAME: {
            LABEL: "Full name",
          },
          EMAIL: {
            LABEL: "Email",
          },
        },
        SUBMIT_BUTTON: "Save changes",
      },
      APPEARANCE: {
        TITLE: "Appearance",
        SUB_TITLE: "Customize language and theme settings",
        FIELDS: {
          LANGUAGE: {
            LABEL: "Language",
            HELPER_TEXT: "Select your preferred language for the interface",
            PLACEHOLDER: "Select language",
          },
          THEME: {
            LABEL: "Theme",
            OPTIONS: {
              DARK: "Dark",
              LIGHT: "Light",
              SYSTEM: "System",
            },
            HELPER_TEXT: "Choose how Autopilot looks to you",
          },
        },
      },
      NOTIFICATIONS: {
        TITLE: "Notifications",
        SUB_TITLE: "Configure how you receive notifications",
        FIELDS: {
          PUSH: {
            TITLE: "Push notifications",
            SUB_TITLE: "Receive notifications on your device",
          },
          EMAIL: {
            TITLE: "Email notifications",
            SUB_TITLE: "Receive weekly summaries via email",
          },
          ANOMALY: {
            TITLE: "Anomaly alerts",
            SUB_TITLE: "Get notified when unusual activity is detected",
          },
          GOAL: {
            TITLE: "Goal reminders",
            SUB_TITLE: "Receive updates on your savings goals",
          },
        },
      },
      AUTOPILOT_SETTINGS: {
        TITLE: "Ajustes Autopilot",
        SUB_TITLE: "Configurar las preferencias de automatización de IA",
        FIELDS: {
          ENABLE_AUTOPILOT: {
            TITLE: "Enable Autopilot",
            SUB_TITLE: "Allow AI to take actions on your behalf",
          },
          AUTO_OPTIMIZE_SUSCRIPTIONS: {
            TITLE: "Auto-optimize subscriptions",
            SUB_TITLE: "Automatically find better plans and deals",
          },
          BUDGET_REALLOCATION: {
            TITLE: "Budget reallocation",
            SUB_TITLE: "Allow automatic budget adjustments",
          },
          ACTION_APPROVAL_THRESHOLD: {
            TITLE: "Action approval threshold",
            HELPER_TEXT: "Actions below this amount will be executed automatically",
            OPTIONS: {
              TEN: "$10 - Approve all actions above",
              TWENTY_FIVE: "$25 - Approve all actions above",
              FIFTY: "$50 - Approve all actions above",
              ONE_HUNDRED: "$100 - Approve all actions above",
            },
          },
        },
      },
      SECURITY: {
        TITLE: "Security",
        SUB_TITLE: "Protect your account",
        FIELDS: {
          FACTOR: {
            TITLE: "Two-factor authentication",
            SUB_TITLE: "It adds an extra layer of security",
          },
          PASSWORD: {
            TITLE: "Password",
            SUB_TITLE: "Last modified 3 months ago",
            BUTTON: "Change",
          },
        },
      },
    },
  },
};
