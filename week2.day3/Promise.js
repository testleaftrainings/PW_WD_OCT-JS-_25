// promise -> pending,resolve,reject
//pending -> fully not completed
//resolve -> task is successed -> .then()
//reject -> task is failed -> .catch()
let prr =new Promise((reslove,reject)=>{

// let success=false 
// if(success){
//     reslove("Successfully task complete")
// }else{
//     reject("Error")
// }
console.log("1st output")


setTimeout(()=>{
    reslove("overloaded")
},2000)

console.log("2nd output")

})

prr.then(result=>console.log(result)).catch(error=>console.log(error))


//ES 7 or 8 -> 2017
//Async/Await
// code look cleaner and more readable
//like synchronous code
//async-> make a function return a promise
//await -> pause the code inside an async function until the promise reslove or reject