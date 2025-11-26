"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.launchBrowser = function () {
        console.log("Launching Browser & Load URL");
    };
    Login.prototype.loginInfo = function () {
        console.log("Enter the username and password");
    };
    Login.prototype.clickLogin = function () {
        console.log("Click on login button");
    };
    Login.prototype.title = function () {
        console.log("Get the title of the page of Login Page");
    };
    return Login;
}());
exports.Login = Login;
