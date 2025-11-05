//playwright -> alert default nature Auto dismiss your alert

import test from '@playwright/test'

test("Auto Dismiss",async({page})=>{
await page.goto("https://www.leafground.com/alert.xhtml")
await page.locator("(//span[text()='Show'])[2]").click()
await page.waitForTimeout(3000)
})

//Event listener -> page.on, page.once
//page.once->  it will handle only first is alert present ,
// if it have second alert auto dismiss

test("Handle alert with page.once",async({page})=>{
//dialog -> alert
page.once('dialog',alertType=>{
    //simple alert-> Alert
    //print type of alert
    console.log(alertType.type())
    console.log(alertType.message())
    alertType.accept()
})

await page.goto("https://www.leafground.com/alert.xhtml")
//alert -> accept
await page.locator("(//span[text()='Show'])[1]").click()
await page.waitForTimeout(3000)
//confirm alert -> auto dismiss
await page.locator("(//span[text()='Show'])[2]").click()
await page.waitForTimeout(3000)

})


//Page.on -> handle all alert is present in your test -> handle more than one alert
test("Alert handle with Page.on",async({page})=>{
page.on('dialog',onType=>{
    const alertType=onType.type()
    const msg= onType.message()
    console.log(msg)
    if(alertType==="alert"){
        onType.accept()
    }else if(alertType==='confirm'){
        onType.accept()
    }else if(alertType==='prompt'){
        onType.accept("Dilip")
    }
})
await page.goto("https://www.leafground.com/alert.xhtml")
//alert -> accept
await page.locator("(//span[text()='Show'])[1]").click()
await page.waitForTimeout(3000)
//confirm alert -> 
await page.locator("(//span[text()='Show'])[2]").click()
await page.waitForTimeout(3000)
console.log(await page.locator("#result").innerText())

})


test.only('Sweet Alert',async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(2).click()
    await page.locator("//span[text()='Dismiss']").click()
})