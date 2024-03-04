//Contains functions for basic navigation

//Navigating to a url
async function navigateTo(page, url){
    await page.goto(url);
}

//Refreshing the current page
async function refreshPage(page){
    await page.reload();
}

//Closing the current tab
async function closeCurrentTab(page){
    await page.close();
}

