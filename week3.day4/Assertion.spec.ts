import test, { expect } from '@playwright/test'

test("Assertion Auto Retry",async({page})=>{

await page.goto("https://www.leafground.com/input.xhtml")

//hard assert
/*await expect(page.locator("//input[@id='j_idt88:name']")).toBeDisabled({timeout:10000})
console.log("Assertion is done") */

//soft assert
await expect.soft(page.locator("//input[@id='j_idt88:name']")).toBeEnabled()
// //.toBeDisabled({timeout:10000})
console.log("Assertion is done")
})
//actionability timeout

test.only("Assertion Non Retry ",async({page})=>{
await page.goto("https://www.leafground.com/input.xhtml")

//tiltle
const actvalue= await page.title()
const expvalue="Input Components"

expect.soft(actvalue).toEqual(expvalue)
console.log("Non retry Assertion")


})