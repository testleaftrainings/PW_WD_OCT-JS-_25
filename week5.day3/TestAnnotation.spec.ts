import test from '@playwright/test'

test("Normal Test",async({page})=>{
await page.goto("https://flipkart.com/")
})

// test.only("Test.only",async({page})=>{

//     await page.goto("https://www.amazon.in/")
// })

test.skip("Test skip",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator('text=CRM/SFA').click()
})

test.fixme("I need fix the Login Page",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator("#Password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator('text=CRM/SFA').click()
})

test.fail("Test Fail",async({page})=>{
    await page.goto("https://www.amazon.in/")

})

//test info -> 
test.only("Test Info ",async({page})=>{

    test.info().annotations.push({type:'smoke',description:'Check the Login fucntion working'},
        {type:'Author',description:'dilip'}
    )
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator('text=CRM/SFA').click()
})

//slow()
test.only("Test Slow ",async({page})=>{
test.slow()
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator('text=CRM/SFA').click()
})

