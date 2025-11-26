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
var WelcomePage_1 = require("./WelcomePage");
var MyHomepage = /** @class */ (function (_super) {
    __extends(MyHomepage, _super);
    function MyHomepage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHomepage.prototype.clickLeads = function () {
        console.log("Clicked on Leads");
    };
    MyHomepage.prototype.clickAccounts = function () {
        console.log("Clicked on Accounts");
    };
    return MyHomepage;
}(WelcomePage_1.Welcomepage));
var myhome = new MyHomepage();
myhome.launchBrowser();
myhome.loginInfo();
myhome.clickLogin();
myhome.clickCrmsfaLink();
myhome.clickLeads();
