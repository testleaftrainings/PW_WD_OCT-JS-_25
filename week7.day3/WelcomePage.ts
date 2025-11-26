import { Login } from "./LoginPage";

export class Welcomepage extends Login{

    clickCrmsfaLink(){
        console.log("Clicked on CRM/SFA Link");
    }

    title(){
        console.log("Get the title of the page of Welcome Page");
     //super -> call immediate parent class method
        super.title()
    }
}

let welcome = new Welcomepage();
welcome.launchBrowser();
welcome.loginInfo();
welcome.clickLogin();
welcome.clickCrmsfaLink();
welcome.title();