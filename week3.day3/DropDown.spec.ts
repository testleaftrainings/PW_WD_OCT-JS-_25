import test from '@playwright/test'

test("Handle DD with Select Tag",async({page})=>{

await page.goto("https://www.leafground.com/select.xhtml")

await page.selectOption(".ui-selectonemenu",{label:'Playwright'})
await page.waitForTimeout(3000)

await page.selectOption(".ui-selectonemenu",{index:3})
await page.waitForTimeout(3000)

})

test.only("Handle DD with Non-Select tag",async({page})=>{

    await page.goto("https://www.leafground.com/select.xhtml")
    await page.locator("[id='j_idt87:country_label']").click()
    await page.locator("li[id='j_idt87:country_4']").click()


    //xpath
    await page.locator("//span[contains(text(),'Mobile')]").fill("")
})