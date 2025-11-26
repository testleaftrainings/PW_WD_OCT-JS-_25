import { Welcomepage } from "./WelcomePage";

export class MyHomepage extends Welcomepage{

clickLeads(){
    console.log("Clicked on Leads");
}

clickAccounts(){
    console.log("Clicked on Accounts"); 
}
}

let myhome = new MyHomepage();
myhome.launchBrowser();
myhome.loginInfo();
myhome.clickLogin();
myhome.clickCrmsfaLink();
myhome.clickLeads();
