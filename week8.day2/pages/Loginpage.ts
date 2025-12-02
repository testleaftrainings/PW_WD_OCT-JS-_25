import { Page } from "playwright";

export class LoginPage{

    lp:Page

constructor(lp:Page){
this.lp=lp
}

async launchAppliaction(){
await this.lp.goto("http://leaftaps.com/opentaps/control/main")
}

async username(){
await this.lp.fill("#username","Demosalesmanager")
}

async password(){
await this.lp.fill("#password","crmsfa")
}

async click(){
    await this.lp.click(".decorativeSubmit")
}






}