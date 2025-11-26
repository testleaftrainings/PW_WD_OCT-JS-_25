var warpper = /** @class */ (function () {
    function warpper() {
    }
    //implementation -1 in that im call 2 args ,1-required and 2- optional
    warpper.prototype.elementClick = function (locator, forceClick) {
        if (forceClick == true) {
            console.log("Do force click");
        }
        // else if(forceClick==false){
        //     console.log("Normal Click")
        // }
        else {
            console.log("Click without forceclick");
        }
    };
    return warpper;
}());
var wrap = new warpper();
wrap.elementClick("#Login");
wrap.elementClick("#Login", true);
