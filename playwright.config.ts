import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  name: 'pw-tests',
  timeout: 10 * 1000,

  expect: {
    timeout: 5000,
  },
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  forbidOnly: !!process.env.GITHUB_ACTIONS,
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  retries: process.env.GITHUB_ACTIONS ? 2 : 0,
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  workers: process.env.GITHUB_ACTIONS ? 1 : undefined,
  testMatch: ["1-grepA.spec.ts" /*, "1-grepA1.spec.ts", "1-grepA2.spec.ts"*/],

  use: {
    baseURL: "http://localhost:3000",
    actionTimeout: 0,
    trace: "on",
    video: "on",
    screenshot: "on",
  },

  projects: [
    {
      name: "chromium",
      retries: 0,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    // {
    //   name: "chromium1",
    //   retries: 0,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium2",
    //   retries: 0,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium3",
    //   retries: 0,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium4",
    //   retries: 0,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium5",
    //   retries: 0,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium6",
    //   retries: 0,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium7",
    //   retries: 0,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium8",
    //   retries: 0,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium9",
    //   retries: 0,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium10",
    //   retries: 0,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "test-results/",
};

export default config;
