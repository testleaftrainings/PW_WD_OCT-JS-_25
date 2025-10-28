import test from '@playwright/test'

test("Login Page",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    //locate the element -> locator() insie your dom
    //fill()-> pass your input to web application
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    console.log(await page.title())
    //wait for few sceonds
   // await page.waitForTimeout(3000)
await page.locator("text='CRM/SFA'").click();


})