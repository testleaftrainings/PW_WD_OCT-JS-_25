import test from '@playwright/test'

test("Multiple matches",async({page})=>{

await page.goto("https://www.amazon.in/")
await page.locator("//div[@class='nav-fill']//input").first().fill("Phones")

//2nd or 3rd matches
//await page.locator().nth(3).clik()

//last match
//await page.locator().last().fill()

})