import test from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({path:'utils/LoginQa.env'})
test("Read value from Env",async({page})=>{
//console.log(value.UserName )


//process.env.varible
//process -> global object for node.js
//env ->environment 
//variable-> LT_Username,LT_url

console.log(process.env.LT_username)

const url= process.env.LT_url as string
const uName=process.env.LT_username as string
const pass=process.env.LT_password as string

await page.goto(url)
await page.locator("#username").fill(uName)
await page.locator("#password").fill(pass)
await page.locator(".decorativeSubmit").click()
await page.locator('text=CRM/SFA').click()




})