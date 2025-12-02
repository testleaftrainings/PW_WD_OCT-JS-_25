import { WelcomePage } from "./Welcomepage";

export class MyHomePage extends WelcomePage{

async clickOnLeads(){
await this.lp.click("text=Leads")
}

async clickOnAccounts(){
    await this.lp.click("text=Accounts")
}

async clickOnCases(){
await this.lp.click("text=Cases")
}


}