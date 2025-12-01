import {test as play} from '@playwright/test'

export const cusFixture=play.extend<{login:any}>({
//define the fixture
login:async({page},use)=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","Demosalesmanager")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
await use(page)

}

})