# BrowserStackDemo
Demo for BrowserStack

# Challenge Exam
1. Write a Selenium test suite using any language/framework and trigger it from a Jenkins server
2. The suite must do the following
  a. Run on BrowserStack Automate (you will need to create a free trial)
  b. Contain 3 separate assertion
  c. Run across 5 browsers in parallel

When complete, please share your suite as a Github repo and provide evidence of your Jenkins job - either the pipeline code or screenshot of the build configuration.

# Actions

- Created a basic script that would invoke selenium on BrowserStack.  

- Created a NodeJS script with 5 capability configuration for different browsers 

- Installed Jenkins.  Installed BrowsersStack Plugin 

- Experimented with various build method within Jenkins

First tried NodeJS plugin but ran into a problem getting the seleniumm-web-driver to get recognized.

Switched to Bash Script build type

` cd /Users/hughbrien/Documents/Software/MintangileProducts/browser-stack-test
` node ./simpletest.js

# Other Discoveries

Since I misread the directions, I know everything about the ` selenium-ide-runner


# Results

[Test Results](https://automate.browserstack.com/dashboard/v2/public-build/QzBJNHFzWnFvZ0xRVHMyZVZsbFNQcWsyREorRjd2WUxEMTJFK3QvaXlpdUc0NmdBdkk3M3UzOC8yaTBlRjE2dTRMdkZhM2tyMC9qelh4dXFZYmlzOGc9PS0tTy9nV09LaTRjdDFDV3Y2Rmw4bVVjQT09--0f37ce24684f51400608f7ac84a86c1c08e8e860) for the Demo


![Parallel Test](https://github.com/hughbrien/BrowserStackDemo/blob/main/basictests.jpg)
![Jenkins Run](https://github.com/hughbrien/BrowserStackDemo/blob/main/jenkinrun.jpg)



