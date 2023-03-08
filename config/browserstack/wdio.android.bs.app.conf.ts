import { config } from "../wdio.shared.conf";

// ============
// Specs
// ============
config.specs = ["./tests/specs/**/app.image.*.spec.ts"];
config.exclude = [
  // Exclude this one because the test can only be executed on emulators/simulators
  "./tests/specs/**/app.biometric.login.spec.js",
];

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USER || "BROWSERSTACK_USER";
config.key = process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY";
// Use browserstack service
config.services = ["browserstack"];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
// @ts-nocheck
config.capabilities = [
  {
    build: "android",
    name: "wdio-test",
    app: "bs://f76be93426663c8a1c02d4b40e71ee4f170ab5ee",  // change this to app from browserstack account
    device: "Google Pixel 3",
    os_version: "9.0",
  },
];

exports.config = config;
