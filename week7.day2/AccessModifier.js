//public -> default access modifier
//private -> access within the class only
//protected -> access within the class and child class
var Elements = /** @class */ (function () {
    function Elements() {
        //properties
        this.eleName = "fill";
    }
    //method
    Elements.prototype.click = function () {
        console.log("Clicking the element");
    };
    Elements.prototype.locator = function () {
        console.log("Element locator");
    };
    Elements.prototype.alert = function () {
        console.log("Alert in the element");
    };
    Elements.prototype.callMethods = function () {
        this.locator();
        this.alert();
    };
    return Elements;
}());
var eleObj = new Elements();
console.log(eleObj.eleName);
eleObj.click();
//eleObj.locator() //-> private method not accessible
//eleObj.alert() //-> protected method not accessible
eleObj.callMethods(); //-> calling private and protected method inside public method
