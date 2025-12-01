abstract class wrapper{

    loadUrl(){
        console.log("Load url")
    }
    
    abstract login():void 

    abstract clickLogin():void

}
//for abstract class we cannot create object
//let b= new wrapper()

//class to abstract class -> extends 
class wrapperMethod extends wrapper{
    login(): void {
console.log("Info")
    }
    clickLogin(): void {
console.log("ClickLogin")
    }
}

let ob=new wrapperMethod()
ob.clickLogin()
ob.loadUrl()
ob.login()