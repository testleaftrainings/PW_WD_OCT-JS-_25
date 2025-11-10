import test, { chromium } from '@playwright/test'

test("Open Multiple pages",async()=>{

    const browser=await chromium.launch({channel:'chrome'})
    const context= await browser.newContext()
    //first page
    const page= await context.newPage()
    await page.goto("https://www.amazon.in/")

    //second
    const page1=await context.newPage()
    await page1.goto("https://www.google.com")

})


test.only("Handle single window",async({page,context})=>{
await page.goto("https://www.amazon.in/")
const value= page.locator("#twotabsearchtextbox")
await value.fill("Phone")
await value.press('Enter')

//create promise -> event listener
//do action
//resolve

//event listener -> promise
const windowPage = context.waitForEvent('page')

//do the action
await page.locator("//span[contains(text(),'iPhone 17')]").first().click()

//resolve the promise
const childwindow=await windowPage

await childwindow.waitForTimeout(3000)
console.log(await childwindow.title())

//close child window or child page
await childwindow.close()

//check focus is transfer to parent page -> yes
const val=await page.locator("//span[contains(text(),'result')]").innerText()
console.log(val)











})