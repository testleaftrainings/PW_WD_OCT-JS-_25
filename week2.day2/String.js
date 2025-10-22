let comName="Test leaf"

let empName=new String("Dilip")

//length of string
let length=comName.length
console.log("Total no of chars :"+length)

//lower ccase
console.log(comName.toLowerCase())
//upper case
console.log(comName.toUpperCase())

//print character based on the index value 
//index value start from '0'
let stname="Raju"
console.log(stname.charAt(2)+" chartAt index 2")

//input -> dilip
//output -> pilid

let data="dilip"
let rev=""
//5-0
//4-0
for(let i=data.length-1;i>=0;i--){
   console.log(data.charAt(i))
   rev=rev+data.charAt(i)
}
console.log(rev)

//split -> split the word (" ")-> will be delimiter to break the string
let details="playwright Master Class"
let splitValue=details.split("a")
console.log(splitValue)
for(let i=0;i<splitValue.length;i++){
    console.log(splitValue[i])
}

let price="25000"
//convert into number 
let value=parseInt(price)
console.log(typeof(value)+" "+value)
console.log(`${typeof(value)} what is price of it ${value}`)

//compare Strict equality(===)-> value(string) and location is compared
//loose equality (==) -> only value compare

let com="TestLeaf" //204
let n="TestLeaf"   //204
let n1="TestLeaf"  //204
let n3="testleaf"  //205
let n2=new String("TestLeaf") //206
console.log(com===n)
console.log(n1==n3)
