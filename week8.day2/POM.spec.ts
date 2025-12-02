import test from '@playwright/test'
import { LeadsPage } from './pages/LeadsPage'
import { MyHomePage } from './pages/MyHomePage'

test("Create Lead",async({page})=>{
const exe= new LeadsPage(page)
await exe.launchAppliaction()
await exe.username()
await exe.password()
await exe.click()
await exe.clickOnCrmsfa()
await exe.clickOnLeads()
await exe.clickOnCreateLead()
})

// test("Click On Accounts",async({page})=>{
//     const mhp=new MyHomePage(page)
//     mhp.launchAppliaction()
//     mhp.username()
//     mhp.password()
//     mhp.click()
//     mhp.clickOnCrmsfa()
//     mhp.clickOnAccounts()
// })