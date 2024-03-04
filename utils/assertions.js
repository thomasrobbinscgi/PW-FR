//Assert Text Present
async function assertTextPresent(page, selector, expectedText){
    const text = await page.textContent(selector);
    expect(text).toContain(expectedText);
}

//Assert Element Visible
async function assertElementVisible(page, selector){
    expect(await page.isVisible(selector)).toBe(true);

}

//Assert Current URL
async function assertCurrentUrl(page, expectedUrl){
    expect(page.url()).toBe(expectedUrl);
}