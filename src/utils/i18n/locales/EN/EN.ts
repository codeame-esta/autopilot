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
