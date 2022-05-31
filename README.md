# BrowserStackDemo
Demo for BrowserStack

# Challenge Exam
1. Write a Selenium test suite using any language/framework and trigger it from a Jenkins server
2. The suite must do the following
  a. Run on BrowserStack Automate (you will need to create a free trial)
  b. Contain 3 separate assertion
  c. Run across 5 browsers in parallel

When complete, please share your suite as a Github repo and provide evidence of your Jenkins job - either the pipeline code or screenshot of the build configuration.

# Results


- Created a basic script that would invoke selenium on BrowserStack.  

- Created a NodeJS script with 5 capability configuration for different browsers 

- Installed Jenkins.  Installed BrowsersStack Plugin 

- Experimented with various build method within Jenkins
- - I am missing 
- - First tried NodeJS plugin but ran into a problem getting the seleniumm-web-driver to get recognized.
- - Switched to Bash Script 
` cd /Users/hughbrien/Documents/Software/MintangileProducts/browser-stack-test
` node ./simpletest.js

--


[Test Results]([https://automate.browserstack.com/dashboard/v2/public-build/Uk1WTFpkYTBkZ1EzeGVSUmxBL2tndzdvMWErRm5Bc2RhK01KODU3dllib1JTL1ZPREFhMzVFeXArcnJYOEV1cWU0T2ViTUtJeXRPeFdLRjVHWDR6c1E9PS0tc2U3Q1lYUjEyM2hTdSs4d2VibzFoZz09--bb9f9a98ba8fe2037ab8eb3fb29325ce7e78dc7f](https://automate.browserstack.com/dashboard/v2/public-build/bnYyVGpJU281bU1xRjF5bXloVndqK0NsYmRBaFh5dGdjVENJRTlkcCs2d2tZYlNVc3VZL3dXUXdleXRUWDZ4YlljMk9pczlFdkROMERBKytpVXNHc0E9PS0tMmJ5NDR0ZTcxWElobDJUR3pDZGM4dz09--2b1c70f30483d536e6f8d7f7cacb39aa29bf3860)) for the Demo

- Other discoveries : Figured out 


![Parallel Test](https://github.com/hughbrien/BrowserStackDemo/blob/main/basictests.jpg)
![Jenkins Run](https://github.com/hughbrien/BrowserStackDemo/blob/main/jenkinsrun.jpg)
