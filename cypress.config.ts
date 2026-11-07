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
  pageLoadTimeout: 1440000,
  // the poem pages are large; keeping every test in memory crashes the browser
  numTestsKeptInMemory: 0
});
