//Wait for element to be visible
async function waitForElementVisible(page, selector){
    await page.waitForSelector(selector, {state: 'visible'});
}

//Take Screenshot
async function takeScreenshot(page, path){
    await page.screenshot({path: path});
}

//Scroll to element
async function scrollToElement(page, selector){
    await page.evaluate((selector) => {
        document.querySelector(selector).scrollIntoView();
    }, selector);
}


//Simulate Hover over element
async function simulateHover(page, selector){
    await page.hover(selector);
}

//Simulate Keyboard Input
async function simulateKeyboardInput(page, keys){
    await page.keyboard.type(keys);
}