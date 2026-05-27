export const EnglishLanguage = {
  COMPONENTS: {
    COMMON: {
      SIDEBAR: {
        NAV_ITEMS: {
          HOME: 'Home',
          INSIGHTS: 'Insights',
          ACTIONS: 'Actions',
          TRANSACTIONS: 'Transactions',
          BUDGETS: 'Budgets',
          GOALS: 'Goals',
          SETTINGS: 'Settings',
        },
        LOG_OUT: 'Log Out',
      },
    },
  },
  PAGES: {
    DASHBOARD: {
      AUTOPILOT_RUNNING: 'Your autopilot is running',
      GOOD_MORNING: 'Good morning, {{user}}!',
      GOOD_AFTERNOON: 'Good afternoon, {{user}}!',
      GOOD_EVENING: 'Good evening, {{user}}!',
    },
    SETTINGS: {
      TITLE: 'Settings',
      DESCRIPTION: 'Manage your account and preferences',
      PERSONAL_INFO: 'Personal Information',
      PROFILE: {
        TITLE: 'Profile',
        CHANGE_PHOTO: 'Change Photo',
        FIELDS: {
          FULL_NAME: {
            LABEL: 'Full name',
          },
          EMAIL: {
            LABEL: 'Email',
          }
        },
        SUBMIT_BUTTON: 'Save changes'
      },
      APPEARANCE: {
        TITLE: 'Appearance',
        SUB_TITLE: 'Customize language and theme settings',
        FIELDS: {
          LANGUAGE: {
            LABEL: 'Language',
            HELPER_TEXT: 'Select your preferred language for the interface',
            PLACEHOLDER: 'Select language'
          },
          THEME: {
            LABEL: 'Theme',
            OPTIONS: {
              DARK: 'Dark',
              LIGHT: 'Light',
              SYSTEM: 'System'
            },
            HELPER_TEXT: 'Choose how Autopilot looks to you'
          }
        },
      },
      NOTIFICATIONS: {
        TITLE: 'Notifications',
        SUB_TITLE: 'Configure how you receive notifications',
        FIELDS: {
          PUSH: {
            TITLE: 'Push notifications',
            SUB_TITLE: 'Receive notifications on your device'
          },
          EMAIL: {
            TITLE: 'Email notifications',
            SUB_TITLE: 'Receive weekly summaries via email'
          },
          ANOMALY: {
            TITLE: 'Anomaly alerts',
            SUB_TITLE: 'Get notified when unusual activity is detected'
          },
          GOAL: {
            TITLE: 'Goal reminders',
            SUB_TITLE: 'Receive updates on your savings goals'
          }
        }
      }
    },
  },
};
