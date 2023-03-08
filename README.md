# Appium Demo Project


Demo project to run Appium tests together with WebdriverIO for:

- iOS/Android Native Apps
- iOS/Android Hybrid Apps

> **Note:**
> This project only handles local execution on 1 em/simulator at a time, not parallel execution. For more info about that Google on setting up a grid with Appium.

## Based on

This project is currently based on:

- **WebdriverIO:** `7.##.#`
- **Appium:** `1.22.#`

## Installation

1. Running `git clone https://github.com/kajaleprashant24/appiumDemo.git`
1. Running `npm install`
1. Installing Appium on a local machine `npm run android.app`
1. Setting up Android and iOS on a local machine [here](./docs/ANDROID_IOS_SETUP.md)
1. Making demo app available. Create a `./apps` directory. Download the app files (.app / .apk) with version >= `0.4.0` [here](https://github.com/webdriverio/native-demo-app/releases). Move the files into the directory `apps`.
1. Running tests on local`npm run android.app`
1. Running tests on browserstack `npm run android.browserstack.app`


## Configuration files

This project uses a specific config for iOS and Android, see [configs](./config). The configs are based on a shared config
[`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts).
This shared config holds **all the defaults** so the iOS and Android configs only need to hold the capabilities and specs that are needed
for running on iOS and or Android (app or browser).

Please check the [`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts)-file for the minimal configuration options. Notes are added for why
a different value has been selected in comparison to the default values WebdriverIO provides.

Since we do not have Appium installed as part of this package we are going to use the globally installed version of Appium. This is
configured in [`wdio.shared.local.appium.conf.ts`](./config/wdio.shared.local.appium.conf.ts).

All tests can be executed on te devices as configured in [`wdio.android.app.conf.ts`](./config/wdio.android.app.conf.ts) or
[`wdio.ios.app.conf.ts`](./config/wdio.ios.app.conf.ts). Please check the below tests on what they do or on how to run them separately.

```sh

# For Android browserstack execution
npm run android.browserstack.app

# For Android local execution
npm run android.app

# For iOS local execution
npm run ios.app
```

You can run the single test with the following commands

```sh
# For Android local execution
npm run android.app -- --spec=tests/specs/app.drag.and.drop.spec.ts

```

### BrowserStack

This project provides a setup for testing with BrowserStack. Please check the [BrowserStack](./config/browserstack)-folder to see the
setup for  Android.

Make sure you install the latest version of the `@wdio/browserstack-service` with

```shell
export BROWSERSTACK_USER=<browser stack user>
export BROWSERSTACK_ACCESS_KEY=<browser stack access key>
```

There are 2 scripts that can be used, see the [`package.json`](./package.json), to execute the tests in the cloud:

```sh

# For Android
$ npm run android.browserstack.app
```

### Sample Exetion demo Video Link: 
https://app-automate.browserstack.com/builds/5588ec75aaf125a939defce0acbf2ea0bc259fc5/sessions/e7c768410fdf264b8244be751e86bb1d00ed9124?auth_token=5bf63eab4e39914fe5c553d94f81eed1c6ac2da4b3cde0dda58fc8f827da5246

### Sample browserstack logs

    ```log
    // Android execution on Browserstack
npm run android.browserstack.app                                                                                                                                       00:35:49

> appium-test-project@0.0.1 android.browserstack.app /Users/prashantkajale/coupa/workspace/try/mobileAuto/appium
> wdio ./config/browserstack/wdio.android.bs.app.conf.ts

2023-03-08T19:05:56.236Z WARN @wdio/config:ConfigParser: pattern ./tests/specs/**/app.biometric.login.spec.js did not match any file

Execution of 1 workers started at 2023-03-08T19:05:56.247Z

2023-03-08T19:05:56.248Z DEBUG @wdio/utils:initialiseServices: initialise service "browserstack" as NPM package
2023-03-08T19:05:56.370Z INFO @wdio/cli:launcher: Run onPrepare hook
2023-03-08T19:05:56.370Z INFO @wdio/browserstack-service: app is not defined in browserstack-service config, skipping ...
2023-03-08T19:05:56.371Z DEBUG @wdio/browserstack-service: Sending launch start event
2023-03-08T19:05:57.900Z DEBUG @wdio/browserstack-service: [Start_Build] Success response: {"build_hashed_id":"zqywzgy4om1k1ssbswfgyhx2qbkdimofb9hp4geb","jwt":"eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJicm93c2Vyc3RhY2tfb2IiLCJzdWIiOiI0Mzg0MDciLCJncm91cF9pZCI6NDMwMzU3LCJ1c2VyX2lkIjo0Mzg0MDcsImJ1aWxkX2hhc2hlZF9pZCI6InpxeXd6Z3k0b20xazFzc2Jzd2ZneWh4MnFia2RpbW9mYjlocDRnZWIiLCJpYXQiOjE2NzgzMDIzNTcsImV4cCI6MTY3ODQ3NTE1N30.BRbA-zAsa9U7lC6XPs75Rb_2cGZWiDkHZ0RQtGn8YWA","allow_screenshots":true}
2023-03-08T19:05:57.900Z INFO @wdio/browserstack-service: browserstackLocal is not enabled - skipping...
2023-03-08T19:05:57.900Z DEBUG @wdio/cli:utils: Finished to run "onPrepare" hook in 1530ms
2023-03-08T19:05:57.903Z WARN @wdio/config:ConfigParser: pattern ./tests/specs/**/app.biometric.login.spec.js did not match any file
2023-03-08T19:05:57.904Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2023-03-08T19:05:57.904Z DEBUG @wdio/cli:utils: Finished to run "onWorkerStart" hook in 0ms
2023-03-08T19:05:57.905Z INFO @wdio/local-runner: Start worker 0-0 with arg: ./config/browserstack/wdio.android.bs.app.conf.ts
[0-0] 2023-03-08T19:05:58.483Z INFO @wdio/local-runner: Run worker command: run
[0-0] 2023-03-08T19:05:58.775Z DEBUG @wdio/config:utils: Found 'ts-node' package, auto-compiling TypeScript files
[0-0] 2023-03-08T19:05:58.858Z DEBUG @wdio/local-runner:utils: init remote session
[0-0] 2023-03-08T19:05:58.866Z DEBUG @wdio/utils:initialiseServices: initialise service "browserstack" as NPM package
[0-0] 2023-03-08T19:05:58.976Z DEBUG @wdio/utils:shim: Finished to run "beforeSession" hook in 0ms
[0-0] RUNNING in bs://f76be93426663c8a1c02d4b40e71ee4f170ab5ee - /tests/specs/app.image.gallery.spec.ts
[0-0] 2023-03-08T19:05:59.225Z DEBUG @wdio/local-runner:utils: init remote session
[0-0] 2023-03-08T19:05:59.226Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-0] 2023-03-08T19:05:59.229Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session
[0-0] 2023-03-08T19:05:59.229Z INFO webdriver: DATA {
[0-0]   capabilities: {
[0-0]     alwaysMatch: {
[0-0]       build: 'android',
[0-0]       name: 'wdio-test',
[0-0]       app: 'bs://f76be93426663c8a1c02d4b40e71ee4f170ab5ee',
[0-0]       device: 'Google Pixel 3',
[0-0]       os_version: '9.0',
[0-0]       'browserstack.wdioService': '7.30.2'
[0-0]     },
[0-0]     firstMatch: [ {} ]
[0-0]   },
[0-0]   desiredCapabilities: {
[0-0]     build: 'android',
[0-0]     name: 'wdio-test',
[0-0]     app: 'bs://f76be93426663c8a1c02d4b40e71ee4f170ab5ee',
[0-0]     device: 'Google Pixel 3',
[0-0]     os_version: '9.0',
[0-0]     'browserstack.wdioService': '7.30.2'
[0-0]   }
[0-0] }
[0-0] 2023-03-08T19:06:20.684Z INFO webdriver: COMMAND executeScript("browserstack_executor: {"action": "annotate", "arguments": {"data": "ObservabilitySync:1678302380683","level": "debug"}}", <object>)
[0-0] 2023-03-08T19:06:20.684Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/execute/sync
[0-0] 2023-03-08T19:06:20.684Z INFO webdriver: DATA {
[0-0]   script: 'browserstack_executor: {"action": "annotate", "arguments": {"data": "ObservabilitySync:1678302380683","level": "debug"}}',
[0-0]   args: []
[0-0] }
[0-0] 2023-03-08T19:06:20.702Z INFO webdriver: RESULT ObservabilitySync:1678302380683
[0-0] 2023-03-08T19:06:20.703Z DEBUG @wdio/browserstack-service: Requesting Browserstack session URL at https://api-cloud.browserstack.com/app-automate/sessions/e7c768410fdf264b8244be751e86bb1d00ed9124.json
[0-0] 2023-03-08T19:06:21.601Z INFO @wdio/browserstack-service: Google Pixel 3 9.0 9.0 session: https://app-automate.browserstack.com/builds/5588ec75aaf125a939defce0acbf2ea0bc259fc5/sessions/e7c768410fdf264b8244be751e86bb1d00ed9124
[0-0] 2023-03-08T19:06:21.601Z DEBUG @wdio/utils:shim: Finished to run "before" hook in 918ms
[0-0] 2023-03-08T19:06:21.607Z INFO @wdio/browserstack-service: Update job with sessionId e7c768410fdf264b8244be751e86bb1d00ed9124
[0-0] 2023-03-08T19:06:21.607Z DEBUG @wdio/browserstack-service: Updating Browserstack session at https://api-cloud.browserstack.com/app-automate/sessions/e7c768410fdf264b8244be751e86bb1d00ed9124.json with request body:  {
[0-0]   name: 'WebdriverIO and Appium, when interacting with a photo gallery app,'
[0-0] }
[0-0] 2023-03-08T19:06:22.778Z DEBUG @wdio/utils:shim: Finished to run "beforeSuite" hook in 1170ms
[0-0] 2023-03-08T19:06:22.782Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 1
[0-0] 2023-03-08T19:06:22.782Z DEBUG @wdio/utils:shim: Finished to run "beforeHook" hook in 0ms
[0-0] Starting test
[0-0] 2023-03-08T19:06:22.782Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 2
[0-0] 2023-03-08T19:06:22.782Z DEBUG @wdio/utils:shim: Finished to run "afterHook" hook in 0ms
[0-0] 2023-03-08T19:06:22.783Z INFO @wdio/browserstack-service: Update job with sessionId e7c768410fdf264b8244be751e86bb1d00ed9124
[0-0] 2023-03-08T19:06:22.784Z DEBUG @wdio/browserstack-service: Updating Browserstack session at https://api-cloud.browserstack.com/app-automate/sessions/e7c768410fdf264b8244be751e86bb1d00ed9124.json with request body:  {
[0-0]   name: 'WebdriverIO and Appium, when interacting with a photo gallery app, - should be able search images in photo gallery successfully'
[0-0] }
[0-0] 2023-03-08T19:06:23.450Z INFO webdriver: COMMAND executeScript("browserstack_executor: {"action":"annotate","arguments":{"data":"Test: should be able search images in photo gallery successfully","level":"info"}}", <object>)
[0-0] 2023-03-08T19:06:23.450Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/execute/sync
[0-0] 2023-03-08T19:06:23.450Z INFO webdriver: DATA {
[0-0]   script: 'browserstack_executor: {"action":"annotate","arguments":{"data":"Test: should be able search images in photo gallery successfully","level":"info"}}',
[0-0]   args: []
[0-0] }
[0-0] 2023-03-08T19:06:23.465Z INFO webdriver: RESULT Test: should be able search images in photo gallery successfully
[0-0] 2023-03-08T19:06:23.466Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 3
[0-0] 2023-03-08T19:06:23.466Z DEBUG @wdio/utils:shim: Finished to run "beforeTest" hook in 682ms
[0-0] 2023-03-08T19:06:23.468Z INFO webdriver: COMMAND findElement("id", "com.example.imagegallery:id/decor_content_parent")
[0-0] 2023-03-08T19:06:23.468Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element
[0-0] 2023-03-08T19:06:23.468Z INFO webdriver: DATA {
[0-0]   using: 'id',
[0-0]   value: 'com.example.imagegallery:id/decor_content_parent'
[0-0] }
[0-0] 2023-03-08T19:06:23.550Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': 'f71fa525-45de-42cd-b092-787902a38290',
[0-0]   ELEMENT: 'f71fa525-45de-42cd-b092-787902a38290',
[0-0]   sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124',
[0-0]   capabilities: {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': 'f71fa525-45de-42cd-b092-787902a38290',
[0-0]     ELEMENT: 'f71fa525-45de-42cd-b092-787902a38290',
[0-0]     sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124'
[0-0]   }
[0-0] }
[0-0] 2023-03-08T19:06:23.551Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 4
[0-0] 2023-03-08T19:06:23.558Z INFO webdriver: COMMAND isElementDisplayed("f71fa525-45de-42cd-b092-787902a38290")
[0-0] 2023-03-08T19:06:23.559Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/f71fa525-45de-42cd-b092-787902a38290/displayed
[0-0] 2023-03-08T19:06:23.613Z INFO webdriver: RESULT true
[0-0] 2023-03-08T19:06:23.613Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 5
[0-0] 2023-03-08T19:06:23.614Z INFO webdriver: COMMAND findElement("id", "com.example.imagegallery:id/action_bar")
[0-0] 2023-03-08T19:06:23.616Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element
[0-0] 2023-03-08T19:06:23.616Z INFO webdriver: DATA { using: 'id', value: 'com.example.imagegallery:id/action_bar' }
[0-0] 2023-03-08T19:06:23.704Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '480adbb2-a967-4dd8-aa67-6820ad9ea3ff',
[0-0]   ELEMENT: '480adbb2-a967-4dd8-aa67-6820ad9ea3ff',
[0-0]   sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124',
[0-0]   capabilities: {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': '480adbb2-a967-4dd8-aa67-6820ad9ea3ff',
[0-0]     ELEMENT: '480adbb2-a967-4dd8-aa67-6820ad9ea3ff',
[0-0]     sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124'
[0-0]   }
[0-0] }
[0-0] 2023-03-08T19:06:23.704Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 6
[0-0] 2023-03-08T19:06:23.711Z INFO webdriver: COMMAND findElement("id", "com.example.imagegallery:id/edt_search")
[0-0] 2023-03-08T19:06:23.711Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element
[0-0] 2023-03-08T19:06:23.711Z INFO webdriver: DATA { using: 'id', value: 'com.example.imagegallery:id/edt_search' }
[0-0] 2023-03-08T19:06:23.713Z INFO webdriver: COMMAND isElementDisplayed("480adbb2-a967-4dd8-aa67-6820ad9ea3ff")
[0-0] 2023-03-08T19:06:23.713Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/480adbb2-a967-4dd8-aa67-6820ad9ea3ff/displayed
[0-0] 2023-03-08T19:06:23.788Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '0690f14a-6377-4b64-ae59-82c1a3766fed',
[0-0]   ELEMENT: '0690f14a-6377-4b64-ae59-82c1a3766fed',
[0-0]   sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124',
[0-0]   capabilities: {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': '0690f14a-6377-4b64-ae59-82c1a3766fed',
[0-0]     ELEMENT: '0690f14a-6377-4b64-ae59-82c1a3766fed',
[0-0]     sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124'
[0-0]   }
[0-0] }
[0-0] 2023-03-08T19:06:23.789Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 7
[0-0] 2023-03-08T19:06:23.794Z INFO webdriver: COMMAND isElementDisplayed("0690f14a-6377-4b64-ae59-82c1a3766fed")
[0-0] 2023-03-08T19:06:23.794Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/0690f14a-6377-4b64-ae59-82c1a3766fed/displayed
[0-0] 2023-03-08T19:06:23.796Z INFO webdriver: RESULT true
[0-0] 2023-03-08T19:06:23.797Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 8
[0-0] 2023-03-08T19:06:23.854Z INFO webdriver: RESULT true
[0-0] 2023-03-08T19:06:23.854Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 9
[0-0] 2023-03-08T19:06:23.854Z INFO webdriver: COMMAND findElement("id", "com.example.imagegallery:id/edt_search")
[0-0] 2023-03-08T19:06:23.855Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element
[0-0] 2023-03-08T19:06:23.855Z INFO webdriver: DATA { using: 'id', value: 'com.example.imagegallery:id/edt_search' }
[0-0] 2023-03-08T19:06:23.936Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '055419e8-2570-4615-b12b-3ffc0f561b5d',
[0-0]   ELEMENT: '055419e8-2570-4615-b12b-3ffc0f561b5d',
[0-0]   sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124',
[0-0]   capabilities: {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': '055419e8-2570-4615-b12b-3ffc0f561b5d',
[0-0]     ELEMENT: '055419e8-2570-4615-b12b-3ffc0f561b5d',
[0-0]     sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124'
[0-0]   }
[0-0] }
[0-0] 2023-03-08T19:06:23.937Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 10
[0-0] 2023-03-08T19:06:23.943Z INFO webdriver: COMMAND elementClick("055419e8-2570-4615-b12b-3ffc0f561b5d")
[0-0] 2023-03-08T19:06:23.944Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/055419e8-2570-4615-b12b-3ffc0f561b5d/click
[0-0] 2023-03-08T19:06:24.052Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 11
[0-0] 2023-03-08T19:06:24.053Z INFO webdriver: COMMAND findElement("id", "com.example.imagegallery:id/edt_search")
[0-0] 2023-03-08T19:06:24.053Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element
[0-0] 2023-03-08T19:06:24.053Z INFO webdriver: DATA { using: 'id', value: 'com.example.imagegallery:id/edt_search' }
[0-0] 2023-03-08T19:06:24.686Z DEBUG @wdio/browserstack-service: Sending data from request queue. Data length = 11, Queue length after removal = 0
[0-0] 2023-03-08T19:06:25.049Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': 'e01cfe6e-0581-4066-8c56-7502bbde69b7',
[0-0]   ELEMENT: 'e01cfe6e-0581-4066-8c56-7502bbde69b7',
[0-0]   sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124',
[0-0]   capabilities: {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': 'e01cfe6e-0581-4066-8c56-7502bbde69b7',
[0-0]     ELEMENT: 'e01cfe6e-0581-4066-8c56-7502bbde69b7',
[0-0]     sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124'
[0-0]   }
[0-0] }
[0-0] 2023-03-08T19:06:25.050Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 1
[0-0] 2023-03-08T19:06:25.054Z INFO webdriver: COMMAND sendKeys(<object>)
[0-0] 2023-03-08T19:06:25.054Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/keys
[0-0] 2023-03-08T19:06:25.054Z INFO webdriver: DATA { value: [ 'Kittens' ] }
[0-0] 2023-03-08T19:06:25.712Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 2
[0-0] 2023-03-08T19:06:25.713Z INFO webdriver: COMMAND findElement("id", "com.example.imagegallery:id/recyclerview_gallery")
[0-0] 2023-03-08T19:06:25.713Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element
[0-0] 2023-03-08T19:06:25.713Z INFO webdriver: DATA {
[0-0]   using: 'id',
[0-0]   value: 'com.example.imagegallery:id/recyclerview_gallery'
[0-0] }
[0-0] 2023-03-08T19:06:25.714Z INFO webdriver: COMMAND sendKeyEvent("66")
[0-0] 2023-03-08T19:06:25.714Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/appium/device/keyevent
[0-0] 2023-03-08T19:06:25.714Z INFO webdriver: DATA { keycode: '66' }
[0-0] 2023-03-08T19:06:26.066Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 3
[0-0] 2023-03-08T19:06:26.164Z DEBUG @wdio/browserstack-service: [INTERVAL_QUEUE] Success response: {"success":true}
[0-0] 2023-03-08T19:06:26.687Z DEBUG @wdio/browserstack-service: Sending data from request queue. Data length = 3, Queue length after removal = 0
[0-0] 2023-03-08T19:06:26.783Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': 'c5a4a8fd-6935-4be8-93a6-b08e14a71988',
[0-0]   ELEMENT: 'c5a4a8fd-6935-4be8-93a6-b08e14a71988',
[0-0]   sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124',
[0-0]   capabilities: {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': 'c5a4a8fd-6935-4be8-93a6-b08e14a71988',
[0-0]     ELEMENT: 'c5a4a8fd-6935-4be8-93a6-b08e14a71988',
[0-0]     sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124'
[0-0]   }
[0-0] }
[0-0] 2023-03-08T19:06:26.784Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 1
[0-0] 2023-03-08T19:06:26.789Z INFO webdriver: COMMAND isElementDisplayed("c5a4a8fd-6935-4be8-93a6-b08e14a71988")
[0-0] 2023-03-08T19:06:26.789Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/c5a4a8fd-6935-4be8-93a6-b08e14a71988/displayed
[0-0] 2023-03-08T19:06:26.938Z INFO webdriver: RESULT true
[0-0] 2023-03-08T19:06:26.939Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 2
[0-0] 2023-03-08T19:06:26.939Z INFO webdriver: COMMAND findElement("id", "com.example.imagegallery:id/img_photo")
[0-0] 2023-03-08T19:06:26.939Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element
[0-0] 2023-03-08T19:06:26.939Z INFO webdriver: DATA { using: 'id', value: 'com.example.imagegallery:id/img_photo' }
[0-0] 2023-03-08T19:06:26.995Z DEBUG @wdio/browserstack-service: [INTERVAL_QUEUE] Success response: {"success":true}
[0-0] 2023-03-08T19:06:27.887Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': 'f1b8c989-945d-4776-961c-1117d0d005b9',
[0-0]   ELEMENT: 'f1b8c989-945d-4776-961c-1117d0d005b9',
[0-0]   sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124',
[0-0]   capabilities: {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': 'f1b8c989-945d-4776-961c-1117d0d005b9',
[0-0]     ELEMENT: 'f1b8c989-945d-4776-961c-1117d0d005b9',
[0-0]     sessionId: 'e7c768410fdf264b8244be751e86bb1d00ed9124'
[0-0]   }
[0-0] }
[0-0] 2023-03-08T19:06:27.887Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 3
[0-0] 2023-03-08T19:06:27.894Z INFO webdriver: COMMAND isElementDisplayed("f1b8c989-945d-4776-961c-1117d0d005b9")
[0-0] 2023-03-08T19:06:27.894Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/f1b8c989-945d-4776-961c-1117d0d005b9/displayed
[0-0] 2023-03-08T19:06:27.943Z INFO webdriver: RESULT true
[0-0] 2023-03-08T19:06:27.943Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 4
[0-0] 2023-03-08T19:06:27.944Z INFO webdriver: COMMAND findElements("id", "com.example.imagegallery:id/txt_title")
[0-0] 2023-03-08T19:06:27.944Z INFO webdriver: [POST] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/elements
[0-0] 2023-03-08T19:06:27.944Z INFO webdriver: DATA { using: 'id', value: 'com.example.imagegallery:id/txt_title' }
[0-0] 2023-03-08T19:06:28.077Z INFO webdriver: RESULT [
[0-0]   {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': 'b8388355-4f4c-4154-b496-0901b6c01074',
[0-0]     ELEMENT: 'b8388355-4f4c-4154-b496-0901b6c01074'
[0-0]   },
[0-0]   {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': 'f762dc89-fb51-4860-b0a9-04f9689b7bb1',
[0-0]     ELEMENT: 'f762dc89-fb51-4860-b0a9-04f9689b7bb1'
[0-0]   },
[0-0]   {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': '32fe51b1-1822-4262-b974-434dd673cd7f',
[0-0]     ELEMENT: '32fe51b1-1822-4262-b974-434dd673cd7f'
[0-0]   },
[0-0]   {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': '02f65ecf-cdfa-44cb-a04f-097063b665c5',
[0-0]     ELEMENT: '02f65ecf-cdfa-44cb-a04f-097063b665c5'
[0-0]   },
[0-0]   {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': 'd7d39092-6bb8-4e47-b684-119b5a668475',
[0-0]     ELEMENT: 'd7d39092-6bb8-4e47-b684-119b5a668475'
[0-0]   },
[0-0]   {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': '3f7ab66e-ae7c-49aa-bc60-7ae50f111528',
[0-0]     ELEMENT: '3f7ab66e-ae7c-49aa-bc60-7ae50f111528'
[0-0]   },
[0-0]   {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': 'ff07e918-64c8-4c72-898f-31dfd43d6297',
[0-0]     ELEMENT: 'ff07e918-64c8-4c72-898f-31dfd43d6297'
[0-0]   },
[0-0]   {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': '6688e8ef-1b7f-444a-a146-679f094047a8',
[0-0]     ELEMENT: '6688e8ef-1b7f-444a-a146-679f094047a8'
[0-0]   },
[0-0]   {
[0-0]     'element-6066-11e4-a52e-4f735466cecf': '63e81aee-40ab-40e7-ad61-89a1b386d7d0',
[0-0]     ELEMENT: '63e81aee-40ab-40e7-ad61-89a1b386d7d0'
[0-0]   }
[0-0] ]
[0-0] 2023-03-08T19:06:28.078Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 5
[0-0] 2023-03-08T19:06:28.091Z INFO webdriver: COMMAND isElementDisplayed("b8388355-4f4c-4154-b496-0901b6c01074")
[0-0] 2023-03-08T19:06:28.091Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/b8388355-4f4c-4154-b496-0901b6c01074/displayed
[0-0] 2023-03-08T19:06:28.151Z INFO webdriver: RESULT true
[0-0] 2023-03-08T19:06:28.152Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 6
[0-0] 2023-03-08T19:06:28.152Z INFO webdriver: COMMAND getElementText("b8388355-4f4c-4154-b496-0901b6c01074")
[0-0] 2023-03-08T19:06:28.152Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/b8388355-4f4c-4154-b496-0901b6c01074/text
[0-0] 2023-03-08T19:06:28.221Z INFO webdriver: RESULT Mandy Monday: Again?
[0-0] 2023-03-08T19:06:28.221Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 7
[0-0] 2023-03-08T19:06:28.221Z INFO webdriver: COMMAND getElementText("f762dc89-fb51-4860-b0a9-04f9689b7bb1")
[0-0] 2023-03-08T19:06:28.222Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/f762dc89-fb51-4860-b0a9-04f9689b7bb1/text
[0-0] 2023-03-08T19:06:28.275Z INFO webdriver: RESULT New Post ♥
[0-0] 2023-03-08T19:06:28.276Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 8
[0-0] 2023-03-08T19:06:28.276Z INFO webdriver: COMMAND getElementText("32fe51b1-1822-4262-b974-434dd673cd7f")
[0-0] 2023-03-08T19:06:28.276Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/32fe51b1-1822-4262-b974-434dd673cd7f/text
[0-0] 2023-03-08T19:06:28.333Z INFO webdriver: RESULT sky 03.03.2023
[0-0] 2023-03-08T19:06:28.333Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 9
[0-0] 2023-03-08T19:06:28.334Z INFO webdriver: COMMAND getElementText("02f65ecf-cdfa-44cb-a04f-097063b665c5")
[0-0] 2023-03-08T19:06:28.334Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/02f65ecf-cdfa-44cb-a04f-097063b665c5/text
[0-0] 2023-03-08T19:06:28.400Z INFO webdriver: RESULT Lindos 2012
[0-0] 2023-03-08T19:06:28.400Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 10
[0-0] 2023-03-08T19:06:28.400Z INFO webdriver: COMMAND getElementText("d7d39092-6bb8-4e47-b684-119b5a668475")
[0-0] 2023-03-08T19:06:28.401Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/d7d39092-6bb8-4e47-b684-119b5a668475/text
[0-0] 2023-03-08T19:06:28.477Z INFO webdriver: RESULT eye bobs smitten kitten 2149 hot pear pink cat eye glasses 5
[0-0] 2023-03-08T19:06:28.477Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 11
[0-0] 2023-03-08T19:06:28.478Z INFO webdriver: COMMAND getElementText("3f7ab66e-ae7c-49aa-bc60-7ae50f111528")
[0-0] 2023-03-08T19:06:28.478Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/3f7ab66e-ae7c-49aa-bc60-7ae50f111528/text
[0-0] 2023-03-08T19:06:28.542Z INFO webdriver: RESULT eye bobs smitten kitten 2149 hot pear pink cat eye glasses 9
[0-0] 2023-03-08T19:06:28.544Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 12
[0-0] 2023-03-08T19:06:28.544Z INFO webdriver: COMMAND getElementText("ff07e918-64c8-4c72-898f-31dfd43d6297")
[0-0] 2023-03-08T19:06:28.544Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/ff07e918-64c8-4c72-898f-31dfd43d6297/text
[0-0] 2023-03-08T19:06:28.643Z INFO webdriver: RESULT Lucky Giraffe
[0-0] 2023-03-08T19:06:28.643Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 13
[0-0] 2023-03-08T19:06:28.644Z INFO webdriver: COMMAND getElementText("6688e8ef-1b7f-444a-a146-679f094047a8")
[0-0] 2023-03-08T19:06:28.644Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/6688e8ef-1b7f-444a-a146-679f094047a8/text
[0-0] 2023-03-08T19:06:28.688Z DEBUG @wdio/browserstack-service: Sending data from request queue. Data length = 13, Queue length after removal = 0
[0-0] 2023-03-08T19:06:28.725Z INFO webdriver: RESULT Pet photography
[0-0] 2023-03-08T19:06:28.725Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 1
[0-0] 2023-03-08T19:06:28.726Z INFO webdriver: COMMAND getElementText("63e81aee-40ab-40e7-ad61-89a1b386d7d0")
[0-0] 2023-03-08T19:06:28.726Z INFO webdriver: [GET] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124/element/63e81aee-40ab-40e7-ad61-89a1b386d7d0/text
[0-0] 2023-03-08T19:06:28.816Z INFO webdriver: RESULT 20220711_9999_95c
[0-0] 2023-03-08T19:06:28.816Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 2
[0-0] [
[0-0]   'Mandy Monday: Again?',
[0-0]   'New Post ♥',
[0-0]   'sky 03.03.2023',
[0-0]   'Lindos 2012',
[0-0]   'eye bobs smitten kitten 2149 hot pear pink cat eye glasses 5',
[0-0]   'eye bobs smitten kitten 2149 hot pear pink cat eye glasses 9',
[0-0]   'Lucky Giraffe',
[0-0]   'Pet photography',
[0-0]   '20220711_9999_95c'
[0-0] ]
[0-0] 2023-03-08T19:06:28.817Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 3
[0-0] 2023-03-08T19:06:28.817Z DEBUG @wdio/utils:shim: Finished to run "afterTest" hook in 0ms
[0-0] 2023-03-08T19:06:28.819Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 4
[0-0] 2023-03-08T19:06:28.819Z DEBUG @wdio/utils:shim: Finished to run "beforeHook" hook in 0ms
[0-0] Test Completed!
[0-0] 2023-03-08T19:06:28.819Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 5
[0-0] 2023-03-08T19:06:28.819Z DEBUG @wdio/utils:shim: Finished to run "afterHook" hook in 0ms
[0-0] 2023-03-08T19:06:28.820Z INFO @wdio/browserstack-service: Update job with sessionId e7c768410fdf264b8244be751e86bb1d00ed9124
[0-0] 2023-03-08T19:06:28.820Z DEBUG @wdio/browserstack-service: Updating Browserstack session at https://api-cloud.browserstack.com/app-automate/sessions/e7c768410fdf264b8244be751e86bb1d00ed9124.json with request body:  {
[0-0]   status: 'passed',
[0-0]   name: 'WebdriverIO and Appium, when interacting with a photo gallery app, - should be able search images in photo gallery successfully'
[0-0] }
[0-0] 2023-03-08T19:06:29.274Z DEBUG @wdio/browserstack-service: [INTERVAL_QUEUE] Success response: {"success":true}
[0-0] 2023-03-08T19:06:29.544Z DEBUG @wdio/browserstack-service: Shutting down request queue
[0-0] 2023-03-08T19:06:29.845Z DEBUG @wdio/browserstack-service: [SHUTDOWN_QUEUE] Success response: {"success":true}
[0-0] 2023-03-08T19:06:29.845Z DEBUG @wdio/utils:shim: Finished to run "after" hook in 1024ms
[0-0] 2023-03-08T19:06:29.845Z INFO webdriver: COMMAND deleteSession()
[0-0] 2023-03-08T19:06:29.846Z INFO webdriver: [DELETE] https://hub-cloud.browserstack.com/wd/hub/session/e7c768410fdf264b8244be751e86bb1d00ed9124
[0-0] 2023-03-08T19:06:31.258Z INFO webdriver: RESULT
[0-0] 2023-03-08T19:06:31.258Z DEBUG @wdio/browserstack-service: Added data to request queue. Queue length = 1
2023-03-08T19:06:31.377Z DEBUG @wdio/local-runner: Runner 0-0 finished with exit code 0
[0-0] PASSED in bs://f76be93426663c8a1c02d4b40e71ee4f170ab5ee - /tests/specs/app.image.gallery.spec.ts
2023-03-08T19:06:31.377Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2023-03-08T19:06:31.378Z DEBUG @wdio/cli:utils: Finished to run "onWorkerEnd" hook in 0ms
2023-03-08T19:06:31.378Z INFO @wdio/cli:launcher: Run onComplete hook
2023-03-08T19:06:31.378Z DEBUG @wdio/browserstack-service: Sending stop launch event
2023-03-08T19:06:31.690Z DEBUG @wdio/browserstack-service: [STOP_BUILD] Success response: ""

Visit https://observability.browserstack.com/builds/zqywzgy4om1k1ssbswfgyhx2qbkdimofb9hp4geb to view build report, insights, and many more debugging information all at one place!

2023-03-08T19:06:31.690Z DEBUG @wdio/cli:utils: Finished to run "onComplete" hook in 312ms

 "spec" Reporter:
------------------------------------------------------------------
[88MX01NQR Android 9 #0-0] Running: 88MX01NQR on Android 9
[88MX01NQR Android 9 #0-0] Session ID: e7c768410fdf264b8244be751e86bb1d00ed9124
[88MX01NQR Android 9 #0-0]
[88MX01NQR Android 9 #0-0] » /tests/specs/app.image.gallery.spec.ts
[88MX01NQR Android 9 #0-0] WebdriverIO and Appium, when interacting with a photo gallery app,
[88MX01NQR Android 9 #0-0]    ✓ should be able search images in photo gallery successfully
[88MX01NQR Android 9 #0-0]
[88MX01NQR Android 9 #0-0] 1 passing (9.6s)


Spec Files:	 1 passed, 1 total (100% completed) in 00:00:35

2023-03-08T19:06:31.691Z INFO @wdio/local-runner: Shutting down spawned worker
2023-03-08T19:06:31.942Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2023-03-08T19:06:31.942Z INFO @wdio/local-runner: shutting down
    ```


