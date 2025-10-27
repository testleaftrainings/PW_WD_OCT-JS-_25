import test, { chromium, firefox, webkit } from '@playwright/test'

test("Launch Browser",async()=>{

    //lanuch browserheadless
    const browser= await chromium.launch({channel:"msedge",headless:false})
    
    const browser1= await firefox.launch({headless:false})
    const browser2= await webkit.launch({headless:false})
    //open window
    const context=  await browser.newContext()
    //open page
    const page= await context.newPage()
    //load the url 
    await page.goto("https://playwright.dev/")

})