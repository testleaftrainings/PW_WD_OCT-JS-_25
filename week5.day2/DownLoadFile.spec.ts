import test from '@playwright/test'
test("Download the file",async({page})=>{

    await page.goto("https://www.leafground.com/file.xhtml")
    const download= page.waitForEvent('download')
    await page.locator("//span[text()='Download']").click()
    const file=await download
    await file.saveAs("Data/"+file.suggestedFilename())


})