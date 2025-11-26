import { MyHomepage } from "./MyHomePage";

class Leadspage extends MyHomepage{

clickOnCreateLead(){
    console.log("Clicked on Create Lead");
}


}
let leadpage = new Leadspage();
leadpage.launchBrowser();
leadpage.loginInfo();
leadpage.clickLogin();
leadpage.clickCrmsfaLink();
leadpage.clickLeads();
leadpage.clickOnCreateLead();
