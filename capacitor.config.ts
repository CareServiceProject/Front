import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'care-service',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
