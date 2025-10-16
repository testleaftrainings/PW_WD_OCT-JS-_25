//var we can able to do re-assignmnent ,re-declaration and Function scoped
var data=20
data=true //re-assignment 
console.log(typeof(data))

var data=null
console.log(data) //re-declaration

//let we can able do only re-assignment ,re-declaration is not possible and block scoped {}
let count=30
count =45 //re-assignment
console.log(count)

//let count=null //we cannot do re-declaration

//const -> final value we cannot change 
//its not possible to re-assignment and re-declaration , Block scoped
const married=false

//married= true//re-assignment 

//const married=null //its not possible