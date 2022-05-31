// The sample test script in this section is compatible with JSON wire protocol-based
// client bindings. Check out our W3C-based scripts in
// the selenium-4 branch of the same repository.
const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const assert = require('assert');
// Input capabilities
const capabilities1 = {
    'browser': 'chrome',
    'build': 'browserstack-build-demo',
    'name': 'Parallel test 1',
    'project': 'exam-project'
}
const capabilities2 = {
    'browser': 'safari',
    'build': 'browserstack-build-demo',
    'name': 'Parallel test 2',
    'project': 'exam-project'
}
const capabilities3 = {
    'browser': 'edge',
    'build': 'browserstack-build-demo',
    'name': 'Parallel test 3',
    'project': 'exam-project'
}
const capabilities4 = {
    'browser': 'firefox',
    'build': 'browserstack-build-demo',
    'name': 'Parallel test 4',
    'project': 'exam-project'
}
const capabilities5 = {
    'browser': 'ie',
    'build': 'browserstack-build-demo',
    'name': 'Parallel test 5',
    'project': 'exam-project'
}



async function runTestWithCaps (capabilities) {
    let driver = new webdriver.Builder()
        .usingServer(`https://hughbrien_dw8QrW:2m74bzcUZxAzcqanNMMU@hub.browserstack.com/wd/hub`)
        .withCapabilities({
            ...capabilities,
            ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
        })
        .build();
    try{
        await driver.get("https://bstackdemo.com/");
        await driver.wait(webdriver.until.titleMatches(/StackDemo/i), 10000);
        // locating product on webpage
        const productOnScreen = await driver.wait(webdriver.until.elementLocated(By.xpath('//*[@id="1"]/p')), 10000)
        // getting name of the product when the product is visible
        const productText =  await driver.wait(webdriver.until.elementIsVisible(productOnScreen, 10000)).getText();
        // clicking the 'Add to cart' button
        await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.xpath('//*[@id="1"]/div[4]'), 10000))).click();
        // waiting until the Cart pane has been displayed on the webpage
        await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.className('float-cart__content'), 10000)));
        // locating product in cart
        const productInCart = await driver.wait(webdriver.until.elementLocated(By.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]')), 10000);
        // getting name of the product in cart if the product is visible on web page
        const productCartText =  await driver.wait(webdriver.until.elementIsVisible(productInCart, 10000)).getText();
        // checking whether product has been added to cart by comparing product name
        assert(productText === productCartText);

        //marking the test as Passed if product has been added to the cart
        await driver.executeScript(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Product has been successfully added to the cart"}}'
        );
    } catch(e) {
        //marking the test as Failed if product has not been added to the cart

    }
    await driver.quit();
}
runTestWithCaps(capabilities1);
runTestWithCaps(capabilities2);
runTestWithCaps(capabilities3);
runTestWithCaps(capabilities4);
runTestWithCaps(capabilities5);
