import { LoginPage } from "./Loginpage";

export class WelcomePage extends LoginPage{

async clickOnCrmsfa(){
await this.lp.click("text=CRM/SFA")
}


async clickOnLogout(){
    await this.lp.click(".decorativeSubmit")
}

}