import { MyHomePage } from "./MyHomePage";

export class LeadsPage extends MyHomePage{

    async clickOnCreateLead(){
        await this.lp.locator("text=Create Lead").click()
    }
}