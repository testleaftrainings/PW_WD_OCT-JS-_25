import test from "@playwright/test"
import {allure} from "allure-playwright"
import { all } from "axios"
test("Login Page",async({page})=>{

await allure.feature("Login Feature")
await allure.story("Login Story")
await allure.description("Login Description")

await allure.step("Login to leaftaps application",async()=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //locate the element -> locator() insie your dom
    //fill()-> pass your input to web application
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
})
const src=await page.screenshot()
await allure.attachment("home-page",src,"image/png")


})