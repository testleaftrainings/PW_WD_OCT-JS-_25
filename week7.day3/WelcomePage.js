"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Welcomepage = void 0;
var LoginPage_1 = require("./LoginPage");
var Welcomepage = /** @class */ (function (_super) {
    __extends(Welcomepage, _super);
    function Welcomepage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Welcomepage.prototype.clickCrmsfaLink = function () {
        console.log("Clicked on CRM/SFA Link");
    };
    Welcomepage.prototype.title = function () {
        console.log("Get the title of the page of Welcome Page");
        _super.prototype.title.call(this);
    };
    return Welcomepage;
}(LoginPage_1.Login));
exports.Welcomepage = Welcomepage;
var welcome = new Welcomepage();
welcome.launchBrowser();
welcome.loginInfo();
welcome.clickLogin();
welcome.clickCrmsfaLink();
welcome.title();
