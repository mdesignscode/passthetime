import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    hostname: "https://random-stuff-one.vercel.app/"
  },
  pageLoadTimeout: 1440000
});
