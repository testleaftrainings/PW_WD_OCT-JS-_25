import { cusFixture } from "./customFixture.spec";

cusFixture("Using Custom Fixture",async({login})=>{

await login.click("text=CRM/SFA")
await login.click("text=Leads")

})


cusFixture("Using Custom Fixture Accounts",async({login})=>{

await login.click("text=CRM/SFA")
await login.click("text=Accounts")

})