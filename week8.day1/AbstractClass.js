var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var wrapper = /** @class */ (function () {
    function wrapper() {
    }
    wrapper.prototype.loadUrl = function () {
        console.log("Load url");
    };
    return wrapper;
}());
//for abstract class we cannot create object
//let b= new wrapper()
//class to abstract class -> extends 
var wrapperMethod = /** @class */ (function (_super) {
    __extends(wrapperMethod, _super);
    function wrapperMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    wrapperMethod.prototype.login = function () {
        console.log("Info");
    };
    wrapperMethod.prototype.clickLogin = function () {
        console.log("ClickLogin");
    };
    return wrapperMethod;
}(wrapper));
var ob = new wrapperMethod();
ob.clickLogin();
ob.loadUrl();
ob.login();
