export interface Config {
  port: number;
  nodeEnv: 'development' | 'production';
  googleSheetsId: string;
  googleSheetsRange: string;
  gcpProjectId: string;
  gcpServiceAccountEmail: string;
  metaAppId: string;
  metaAppSecret: string;
  metaPageId: string;
  metaIgBusinessAccountId: string;
  metaPageAccessToken: string;
  xApiKey: string;
  xApiSecret: string;
  xAccessToken: string;
  xAccessTokenSecret: string;
  xBearerToken: string;
  orchestratorSecret: string;
  firestoreEnabled: boolean;
  logLevel: string;
}

export function loadConfig(): Config {
  return {
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: (process.env.NODE_ENV || 'production') as 'development' | 'production',
    googleSheetsId: process.env.GOOGLE_SHEETS_ID || '',
    googleSheetsRange: process.env.GOOGLE_SHEETS_RANGE || 'Sheet1!A1:M1000',
    gcpProjectId: process.env.GCP_PROJECT_ID || '',
    gcpServiceAccountEmail: process.env.GCP_SERVICE_ACCOUNT_EMAIL || '',
    metaAppId: process.env.META_APP_ID || '',
    metaAppSecret: process.env.META_APP_SECRET || '',
    metaPageId: process.env.META_PAGE_ID || '',
    metaIgBusinessAccountId: process.env.META_IG_BUSINESS_ACCOUNT_ID || '',
    metaPageAccessToken: process.env.META_PAGE_ACCESS_TOKEN || '',
    xApiKey: process.env.X_API_KEY || '',
    xApiSecret: process.env.X_API_SECRET || '',
    xAccessToken: process.env.X_ACCESS_TOKEN || '',
    xAccessTokenSecret: process.env.X_ACCESS_TOKEN_SECRET || '',
    xBearerToken: process.env.X_BEARER_TOKEN || '',
    orchestratorSecret: process.env.ORCHESTRATOR_SECRET || 'dev-secret',
    firestoreEnabled: process.env.FIRESTORE_ENABLED === 'true',
    logLevel: process.env.LOG_LEVEL || 'info',
  };
}
