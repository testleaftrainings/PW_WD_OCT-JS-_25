export class Browser{

//properties
empName:string="Kumar"
comName:string

//method
launchBrowser(){
    console.log("Launching the Browser")
}

loadurl(url:string){
console.log("Loading the url:"+url)
}

loginInfo(username:string,password:string){
return username+" "+password
}

//constructor
// constructor(){
//     console.log("Default Constructor")
// }

constructor(comName:string){
this.comName=comName
console.log("Company Name is:"+this.comName)
}


//using with help object
//i need create object inside class or outside class
//object creation outside the class

}


//let objectname=new Classname()
// let obj1=new Browser("TestLeaf")
// obj1.launchBrowser()
// obj1.loadurl(`www.google.com`)
// console.log(obj1.loginInfo("Demosalesmanager","crmsfa"))
// //variable console.log(obj1.empName)
// console.log("Employee Name is:"+obj1.empName)