export const SpanishLanguage = {
  COMPONENTS: {
    COMMON: {
      SIDEBAR: {
        NAV_ITEMS: {
          HOME: "Inicio",
          INSIGHTS: "Perspectivas",
          ACTIONS: "Acciones",
          TRANSACTIONS: "Transacciones",
          BUDGETS: "Presupuestos",
          GOALS: "Metas",
          SETTINGS: "Configuración",
        },
        LOG_OUT: "Cerrar sesión",
      },
    },
  },
  PAGES: {
    DASHBOARD: {
      AUTOPILOT_RUNNING: "Autopilot en marcha",
      GOOD_MORNING: "¡Buenos días, {{user}}!",
      GOOD_AFTERNOON: "¡Buenas tardes, {{user}}!",
      GOOD_EVENING: "¡Buenas noches, {{user}}!",
      STAT_CARDS: {
        MONEY_SAVED: "Dinero ahorrado",
        OPTIMIZATIONS: "Optimizaciones",
        AUTO_ACTIONS: "Acciones automáticas",
        ANOMALIES_DETECTED: "Anomalías detectadas",
        VS_LAST_MONTH: "vs mes anterior",
      },
      CASH_FLOW: {
        TITLE: "Flujo de caja",
        INCOME: "Ingresos",
        EXPENSES: "Gastos",
        PERIOD_PLACEHOLDER: "Período",
        PERIODS: {
          THIS_MONTH: "Este mes",
          LAST_MONTH: "Mes anterior",
          THREE_MONTHS: "3 meses",
        },
      },
      RECENT_ACTIONS: {
        TITLE: "Acciones recientes",
        VIEW_ALL: "Ver todas",
        ACTIONS: {
          SUBSCRIPTION_OPTIMIZED: {
            TITLE: "Suscripción optimizada",
            DESCRIPTION: "Ahorraste $12.90",
          },
          OVERSPENDING_REDUCED: {
            TITLE: "Gasto excesivo reducido",
            DESCRIPTION: "Ahorraste $26.40",
          },
          BUDGET_REALLOCATED: {
            TITLE: "Presupuesto reasignado",
            DESCRIPTION: "Se reasignaron $60.00 a Ahorros",
          },
        },
      },
      SPENDING_CATEGORIES: {
        TITLE: "Principales categorías de gasto",
        TOTAL_SPENT: "Total gastado",
        PERIOD_PLACEHOLDER: "Período",
        PERIODS: {
          THIS_MONTH: "Este mes",
          LAST_MONTH: "Mes anterior",
          THREE_MONTHS: "3 meses",
        },
        CATEGORIES: {
          HOUSING: "Vivienda",
          FOOD_AND_DINING: "Comida y restaurantes",
          TRANSPORT: "Transporte",
          SHOPPING: "Compras",
          ENTERTAINMENT: "Entretenimiento",
          OTHERS: "Otros",
        },
      },
    },
    INSIGHTS: {
      TITLE: "Perspectivas",
      DESCRIPTION: "Análisis de tus finanzas impulsados por IA",
    },
    ACTIONS: {
      TITLE: "Acciones",
      DESCRIPTION: "Acciones automatizadas ejecutadas por tu autopilot",
    },
    TRANSACTIONS: {
      TITLE: "Transacciones",
      DESCRIPTION: "Visualiza y gestiona tu historial de transacciones",
    },
    BUDGETS: {
      TITLE: "Presupuestos",
      DESCRIPTION: "Controla y administra tus presupuestos de gasto",
    },
    GOALS: {
      TITLE: "Metas",
      DESCRIPTION: "Establece y sigue el progreso de tus metas financieras",
    },
    SETTINGS: {
      TITLE: "Configuración",
      DESCRIPTION: "Administra tu cuenta y preferencias",
      PERSONAL_INFO: "Información Personal",
      PROFILE: {
        TITLE: "Perfil",
        CHANGE_PHOTO: "Cambiar foto",
        FIELDS: {
          FULL_NAME: {
            LABEL: "Nombre completo",
          },
          EMAIL: {
            LABEL: "Correo electrónico",
          },
        },
        SUBMIT_BUTTON: "Guardar cambios",
      },
      APPEARANCE: {
        TITLE: "Apariencia",
        SUB_TITLE: "Personaliza la configuración de idioma y tema",
        FIELDS: {
          LANGUAGE: {
            LABEL: "Lenguaje",
            HELPER_TEXT: "Seleccione su idioma preferido para la interfaz",
          },
          THEME: {
            LABEL: "Tema",
            OPTIONS: {
              DARK: "Oscuro",
              LIGHT: "Claro",
              SYSTEM: "Sistema",
            },
            HELPER_TEXT: "Elige cómo quieres que se vea Autopilot",
          },
        },
      },
      NOTIFICATIONS: {
        TITLE: "Notificaciones",
        SUB_TITLE: "Configura cómo recibes las notificaciones",
        FIELDS: {
          EMAIL: {
            TITLE: "Notificaciones Email",
            SUB_TITLE: "Reciba resúmenes semanales por correo electrónico",
          },
          GOAL: {
            TITLE: "Recordatorios de objetivos",
            SUB_TITLE: "Recibe actualizaciones sobre sus objetivos de ahorro",
          },
        },
      },
      AUTOPILOT_SETTINGS: {
        TITLE: "Ajustes Autopilot",
        SUB_TITLE: "Configurar las preferencias de automatización de IA",
        FIELDS: {
          ENABLE_AUTOPILOT: {
            TITLE: "Habilitar Autopilot",
            SUB_TITLE: "Permita que la IA actúe en su nombre",
          },
          AUTO_OPTIMIZE_SUSCRIPTIONS: {
            TITLE: "Optimización automática de suscripciones",
            SUB_TITLE: "Encuentra automáticamente mejores planes y ofertas",
          },
          BUDGET_REALLOCATION: {
            TITLE: "Reasignación presupuestaria",
            SUB_TITLE: "Permitir ajustes automáticos del presupuesto",
          },
          ACTION_APPROVAL_THRESHOLD: {
            TITLE: "Umbral de aprobación de acción",
            HELPER_TEXT: "Las acciones inferiores a esta cantidad se ejecutarán automáticamente.",
            OPTIONS: {
              TEN: "$10 - Aprobar todas las acciones anteriores",
              TWENTY_FIVE: "$25 - Aprobar todas las acciones anteriores",
              FIFTY: "$50 - Aprobar todas las acciones anteriores",
              ONE_HUNDRED: "$100 - Aprobar todas las acciones anteriores",
            },
          },
        },
      },
      SECURITY: {
        TITLE: "Seguridad",
        SUB_TITLE: "Protege tu cuenta",
        FIELDS: {
          FACTOR: {
            TITLE: "Autenticación de dos factores",
            SUB_TITLE: "Añade una capa adicional de seguridad",
          },
          PASSWORD: {
            TITLE: "Contraseña",
            SUB_TITLE: "Última modificación hace 3 meses",
            BUTTON: "Cambiar",
          },
        },
      },
    },
  },
};
