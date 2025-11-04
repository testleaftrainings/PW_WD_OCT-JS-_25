//Union -> OR condition(|)
let Apistatus:number|string|boolean
Apistatus=200
console.log(Apistatus)

//Intersection -> AND conditon(&)
let studentDetails:boolean&string

//type alias -> create custom typeof data
type studentDetails={
    stdStatus:boolean
    stdName:string
}

type details={
    profStatus?:boolean
    profName:string
}

//optional value -> after variableName?

//type db=studentDetails|details
type db1=studentDetails&details

let info:db1={
    stdName:"Dinesh",
    stdStatus:true,
    profName:"Dilip",
    //profStatus:true
}

console.log(info)