//callbackhell -> mupltiple asynchronous function are nested inside each other as call callback

//the code keep moiving deeper and deeper (nested structure)
//hard to read and debug
function a(empName,callback){
    console.log(empName)
    callback(37)
}

function b(empId ,callback){
    console.log(empId)
    callback(true)
}

function c(empStatus){
    console.log(empStatus)
}

a("dilip",b)