"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    //constructor
    // constructor(){
    //     console.log("Default Constructor")
    // }
    function Browser(comName) {
        //properties
        this.empName = "Kumar";
        this.comName = comName;
        console.log("Company Name is:" + this.comName);
    }
    //method
    Browser.prototype.launchBrowser = function () {
        console.log("Launching the Browser");
    };
    Browser.prototype.loadurl = function (url) {
        console.log("Loading the url:" + url);
    };
    Browser.prototype.loginInfo = function (username, password) {
        return username + " " + password;
    };
    return Browser;
}());
exports.Browser = Browser;
//let objectname=new Classname()
// let obj1=new Browser("TestLeaf")
// obj1.launchBrowser()
// obj1.loadurl(`www.google.com`)
// console.log(obj1.loginInfo("Demosalesmanager","crmsfa"))
// //variable console.log(obj1.empName)
// console.log("Employee Name is:"+obj1.empName)
