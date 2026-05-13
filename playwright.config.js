import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 120000,

  reporter: [
    ['html', { open: 'never' }]
  ],

  use: {
    actionTimeout: 30000,        
    navigationTimeout: 60000,
    trace:'on-first-retry', 
    traceOptions: {
      screenshots: true,
      snapshots: true,
      sources: true,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],

});