//Fill an input field with text
async function fillTextInput(page, selector, text){
    await page.fill(selector,text);
}

//Select Dropdown Option
async function selectDropdownOption(page, selector, value){
    await page.selectOption(selector, value);
}

//Click Button
async function clickButton(page, selector){
    await page.click(selector);
}

//Submit Form
async function submitForm(page, selector){
    await page.press(selector, 'Enter');
}