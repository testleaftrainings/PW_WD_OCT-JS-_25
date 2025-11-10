import test from '@playwright/test'

test("Multiple window",async({page,context})=>{

    await page.goto("https://www.leafground.com/window.xhtml")
    
    
//create Promise
const[multipleWindow]= await Promise.all([
    context.waitForEvent('page'),
     page.locator("//span[text()='Open Multiple']").click()
])
//3->  1 main window and 2 child window
const count=multipleWindow.context().pages()
console.log(count.length)

// i want transfer control to webTable page
//with help of title of page

//declare empty variable for child page
let dashboard:any
let webtable:any

for (let i = 0; i < count.length; i++) {
    
    const title=await count[i].title()
    if(title==='Web Table'){
        //resolve the promise
        webtable=count[i]
    }else if(title==='Dashboard'){
        //resolve the promise
        dashboard=count[i]
    }
}


webtable.locator("//input[@id='form:j_idt89:globalFilter']").fill("India")
webtable.waitForTimeout(3000)
webtable.close()
 dashboard.bringToFront() 
 dashboard.locator("#email").fill("dilip@testleaf.com")

 
})