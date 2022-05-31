# BrowserStackDemo
Demo for BrowserStack.  

# Challenge Exam
- Write a Selenium test suite using any language/framework and trigger it from a Jenkins server
- The suite must do the following
- Run on BrowserStack Automate (you will need to create a free trial)
- Contain 3 separate assertion
- Run across 5 browsers in parallel

When complete, please share your suite as a Github repo and provide evidence of your Jenkins job - either the pipeline code or screenshot of the build configuration.

# Actions

- Created a basic script that would invoke selenium on BrowserStack. I lifted one of the example scripts from the documentation and made some modifications. It was primarily a mobile app that I tweaked to work with broswers : 
```
    let driver = new webdriver.Builder()
        .usingServer(`https://hughbrien_dw8QrW:2m74bzcUZxAzcqanNMMU@hub.browserstack.com/wd/hub`)
        .withCapabilities({
            ...capabilities,
            ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
        })
        .build();
 ```

- Created a [NodeJS script](https://github.com/hughbrien/BrowserStackDemo/blob/main/demotest.js) with 5 capability configuration for different browsers 

- Installed Jenkins.  Installed BrowsersStack Plugin 

- Experimented with various build method within Jenkins

First tried NodeJS plugin but ran into a problem getting the seleniumm-web-driver to get recognized with Jenkins was invoking it. I am pretty sure it's ac configuration issue somewhere. 

Switched to Bash Script build type

``` 
cd /Users/hughbrien/Documents/Software/MintangileProducts/browser-stack-test
node ./simpletest.js
```

# Other Discoveries

Since I misread the directions, I now know almost everything about : [selenium-ide-runner](https://www.browserstack.com/docs/automate/selenium/selenium-ide#getting-started-with-selenium-ide).  With a little more time, I think I could some intesting things with that Javascript library. 


# Results

I got this completed but I still I am missing something : [Test Results](https://automate.browserstack.com/dashboard/v2/public-build/QzBJNHFzWnFvZ0xRVHMyZVZsbFNQcWsyREorRjd2WUxEMTJFK3QvaXlpdUc0NmdBdkk3M3UzOC8yaTBlRjE2dTRMdkZhM2tyMC9qelh4dXFZYmlzOGc9PS0tTy9nV09LaTRjdDFDV3Y2Rmw4bVVjQT09--0f37ce24684f51400608f7ac84a86c1c08e8e860) for the Demo  


# Screen Shots and Logs 
![Parallel Test](https://github.com/hughbrien/BrowserStackDemo/blob/main/basictests.jpg)
![Jenkins Run](https://github.com/hughbrien/BrowserStackDemo/blob/main/jenkinrun.jpg)


When I attempted to run the BrowserStack plugin from Jenkins I kept getting : Error: Cannot find module 'selenium-webdriver'

```

Started by user Hugh Brien
Running as SYSTEM
Building on the built-in node in workspace /Users/hughbrien/.jenkins/workspace/BasicPipelineNodeJS
[BrowserStack] BROWSERSTACK_USERNAME=hughbrien_dw8QrW
[BrowserStack] BROWSERSTACK_ACCESS_KEY=********************
[BrowserStack] BROWSERSTACK_BUILD=jenkins-BasicPipelineNodeJS-10
[BrowserStack] BROWSERSTACK_BUILD_NAME=jenkins-BasicPipelineNodeJS-10
[BrowserStack] BROWSERSTACK_LOCAL=false
[BrowserStack] BROWSERSTACK_USERNAME=hughbrien_dw8QrW
[BrowserStack] BROWSERSTACK_ACCESS_KEY=********************
[BrowserStack] BROWSERSTACK_BUILD=jenkins-BasicPipelineNodeJS-10
[BrowserStack] BROWSERSTACK_BUILD_NAME=jenkins-BasicPipelineNodeJS-10
[BrowserStack] BROWSERSTACK_LOCAL=false
[BasicPipelineNodeJS] $ /Users/hughbrien/.jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/BrowserStack/bin/node /var/folders/dh/ch_vndvs5ms_2r80xngww5100000gn/T/jenkins5314139454518981369.js
node:internal/modules/cjs/loader:942
  throw err;
  ^

Error: Cannot find module 'selenium-webdriver'
Require stack:
- /private/var/folders/dh/ch_vndvs5ms_2r80xngww5100000gn/T/jenkins5314139454518981369.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:939:15)
    at Module._load (node:internal/modules/cjs/loader:780:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/private/var/folders/dh/ch_vndvs5ms_2r80xngww5100000gn/T/jenkins5314139454518981369.js:20:19)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Module._load (node:internal/modules/cjs/loader:827:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/private/var/folders/dh/ch_vndvs5ms_2r80xngww5100000gn/T/jenkins5314139454518981369.js'
  ]
}

Node.js v18.1.0
Build step 'Execute NodeJS script' marked build as failure
Finished: FAILURE
```
