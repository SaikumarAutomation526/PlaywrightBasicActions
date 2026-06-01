// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout:60*1000,
  reporter:'html',
  use: {
   headless:false,
   screenshot:'only-on-failure',
   video:'retain-on-failure',
   trace:'retain-on-failure'
  },

  

  
});

