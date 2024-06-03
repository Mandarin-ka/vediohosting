import { baseUrl } from '@/constants/apiConfig';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      config.env.sharedSecret = process.env.X_API_KEY;

      return config;
    },
  },
});
