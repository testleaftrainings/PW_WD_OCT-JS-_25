import test from '@playwright/test'

test("Playwright Locators",async({page})=>{

await page.goto("https://parabank.parasoft.com/parabank/index.htm")

//getByText
await page.getByText("Admin Page").click()
await page.waitForTimeout(3000)

//getByRole
await page.getByRole('link',{name:'Forgot login info?'}).click()
await page.waitForTimeout(3000)

//getByAltText
await page.getByAltText('ParaBank').click()
await page.waitForTimeout(3000)

//getByPlaceHolder
await page.getByPlaceholder("Search").click()

//getByTestId
await page.getByTestId("").fill("")

//getTitle
await page.getByTitle("Contacts").click()

//getLable
await page.getByLabel("").fill("")







})