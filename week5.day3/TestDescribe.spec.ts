import test from '@playwright/test'

test.describe("Test Describe",()=>{

test.describe.configure({mode:'serial',retries:1})

test("Test 1",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator('text=CRM/SFA').click()
})

test("Test 2",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmi").click()
await page.locator('text=CRM/SFA').click()
})

test("Test 3",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator('text=CRM/SFA').click()
})



























})