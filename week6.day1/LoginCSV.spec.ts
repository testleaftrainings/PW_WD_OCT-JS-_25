import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'
const data=parse(fs.readFileSync(path.join(__dirname,"../../utils/Login.csv")),{
    columns:true
})


for(let value of data){
test(`Login with CSV file ${value.TestCaseId}`,async({page})=>{
await page.goto("https://login.salesforce.com/?locale=in")
await page.locator("#username").fill(value.Username)
await page.locator("#password").fill(value.Password)
await page.click("#Login")
})

}