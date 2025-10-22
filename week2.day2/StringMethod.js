//replace -> replace old char to new char
let value1="Playwright"
console.log(value1.replace("a","A"))

//replaceALL
let click="Week 2 Day 1 $"
//let v=click.replaceAll(/[a-zA-Z0-9 $]/g,"@")

let v=click.replaceAll(/[^0-9a-z]/g,"@")
// ^ -> retrain the value 
//@@@@@2@@@@@1
// /g-> global flag -> es 2021
console.log(v)
//W@@@ 2 D@@ 1 //@@@@ 2 @@@ 1 // @@@@ @ @@@ @ //@@@@@@@@@@@@

//substring -> value based on index 
//string -> start index(2) -> ring
//start index(2),end index(5)-1=4 -> rin

let syb="playwright"
console.log(syb.substring(4)) //wright
console.log(syb.substring(2,7)) //aywri
console.log(syb.substring(-3)+" -ve")

//slice -> same to substring but slice with excpet -ve values
console.log(syb.slice(3,5))
console.log(syb.slice(-5, -3))
//total length - 5
//10-5=-> this index start
//10-3=7(5,7)