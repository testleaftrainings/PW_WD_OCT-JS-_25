class warpper{
    elementClick(locator:string):void
    elementClick(locator:string,forceClick:boolean):void
//implementation -1 in that im call 2 args ,1-required and 2- optional
elementClick(locator:string,forceClick?:boolean):void{

    if(forceClick==true){
console.log("Do force click")
}
// else if(forceClick==false){
//     console.log("Normal Click")
// }
else{
    console.log("Click without forceclick")
}
}
}

let wrap = new warpper();
wrap.elementClick("#Login")
wrap.elementClick("#Login",true)