//Array ->Collection of data -> it can have differnt types of data types
//Array -> index will start from '0'
//Length,push,pop,shift,unshift

let value=["Chrome",1,,true]
console.log(value.length)
//0 to 3 -> 0,1,2,3
console.log(value[2])
//add the value
value[5]="dilip" //0 to 4 -> 0,1,2,3,4,5
console.log(value)

//index 2, 4 -> undefined
//remove value
value.splice(1,2)
//splice(1-> start index , count delete -> 2)
console.log(value)

value.splice(2,2,"Testleaf","Ravi")
console.log(value)

//push,unshift -> 
//push -> add new value in end of the array
//unshift -> add new value in start of the array
value.push('dilip')
value.unshift('Edge')
console.log(value)

//pop and shift
//pop -> remove last element in an array
//shift -> remove frist element in an array
value.pop()
value.shift()
console.log(value)

for(let i=0;i<value.length;i++){
    console.log(value[i])
}

// for..of  --> 
//for(newVariable of oldVariable){ console.log(newVariable)}

let arr=[2,4,8,9,2,3]

for(let val of arr){
    console.log(val)
}