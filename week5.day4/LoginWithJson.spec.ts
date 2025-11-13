import test from '@playwright/test'
import getData from "../../utils/Login.json"

//index will start from '0'
//const value=getData[1]

for(let value of getData){
test(`Read the value from Json ${value.TestCase}`,async({page})=>{
//console.log(value.UserName )
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill(value.UserName)
await page.locator("#password").fill(value.Password)
await page.locator(".decorativeSubmit").click()
await page.locator('text=CRM/SFA').click()
})


}
