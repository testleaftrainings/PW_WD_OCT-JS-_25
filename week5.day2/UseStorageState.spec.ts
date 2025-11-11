import test from '@playwright/test'

test.use({storageState:"Data/LeafTapsLogin.json"})
test("Use Storage State Function",async({page})=>{
await page.goto("http://leaftaps.com/crmsfa/control/main")
await page.locator("//a[text()='Leads']").click()
})

