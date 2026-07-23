export const VIEWS = ['home', 'services', 'projects', 'audit'];

export const THEME_KEY = 'portfolio-theme';

export const ESTIMATOR_CONFIG = {
  portfolio: {
    stack: "HTML5 / Vanilla CSS / JS + SEO Engine + Responsive Grid",
    getSla: (scale) => (scale === 'enterprise' ? "2 Weeks" : "1 Week"),
    validation: "ISTQB Unit + Integration Test Suite"
  },
  dashboard: {
    stack: "REST API Backend + Custom Management Dashboard UI + RBAC Auth",
    getSla: (scale) => (scale === 'enterprise' ? "3 - 4 Weeks" : "2 - 3 Weeks"),
    validation: "ISTQB CTFL End-to-End Regression Suite"
  },
  vps: {
    stack: "Docker Containerization + Nginx Reverse Proxy + Automated SSL/Backups",
    getSla: () => "3 - 5 Days",
    validation: "Uptime Monitoring & Firewall Lockdown Audit"
  }
};

export const CLI_HELP_TEXT =
  "• overview (or home)  : Navigate to Overview\n" +
  "• services            : View Services & Estimator\n" +
  "• projects (or proof) : Inspect Structural Projects\n" +
  "• audit (or contact)  : Book Free Architecture Review\n" +
  "• experience          : Display credentials & metrics summary\n" +
  "• theme               : Toggle Dark / Light theme\n" +
  "• clear               : Clear terminal screen\n" +
  "• exit                : close terminal screen";
