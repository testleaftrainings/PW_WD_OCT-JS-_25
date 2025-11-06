//frame index
import test from '@playwright/test'
test("Handle Frame with index value",async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")
    const totalFrame=page.frames()
console.log(totalFrame.length)

//main page also consider as frame 
//index start from '0'
//[0]->main page
//[1]->1st frame,[2]->2nd frame....

const firstFrame=totalFrame[1]
console.log(await firstFrame.locator("#Click").innerText())
await firstFrame.locator("#Click").click()
console.log(await firstFrame.locator("#Click").innerText())


//nested frame
const fourthframe=totalFrame[4]
await fourthframe.locator("#Click").click()
})



test("Handle Frame with FrameLocator",async({page})=>{

 await page.goto("https://www.leafground.com/frame.xhtml")
await page.frameLocator("(//iframe)[1]").locator("#Click").click()
//fameLoactor("#ape_Gateway_desktop-ad-center-1_desktop_iframe").locator().click()

})


//Frame object ->selector or url? and name?

test.only("Handle Frame with FrameObject",async({page})=>{
 await page.goto("https://www.leafground.com/frame.xhtml")
 await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator("#Click").click()
//await page.frame()
})