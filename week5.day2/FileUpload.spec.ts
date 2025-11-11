import test from '@playwright/test'

test("Upload File with Input tag",async({page})=>{

await page.goto("https://www.leafground.com/file.xhtml")

await page.locator("//span[text()='Choose']/following-sibling::input").first()
.setInputFiles("Data/XPath Cheat Sheet.pdf")
})

test.only("Upload the File with Event Listener",async({page})=>{
await page.goto("https://www.leafground.com/file.xhtml")

//create Promise
const file= page.waitForEvent('filechooser')

//do the action
await page.locator("//span[text()='Choose']/following-sibling::input").first().click()

//resolve promise
const fileUpload=await file 

await fileUpload.setFiles("Data/XPath Cheat Sheet.pdf")

})