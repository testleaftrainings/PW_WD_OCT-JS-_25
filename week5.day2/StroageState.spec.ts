import test from '@playwright/test'

test("Stroage State",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator('text=CRM/SFA').click()


//get the value
await page.context().storageState({path:"Data/LeafTapsLogin.json"})
//json-> key and value pair

})