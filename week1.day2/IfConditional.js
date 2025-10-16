let num =0

//if conditional
if (num>0) {
    console.log("Positive Number : " + num)
}

//if-else 
    if(num>0){
console.log("Positive Number :"+num)

    }else{
console.log("Negative Number :"+num)
    }


// if else-if else    
    if(num>=0){
console.log("Positive Number :"+num)
    }
    else if(num==0){
console.log("natural Number :"+num)
    }
    else{
console.log("Negative Number :"+num)
    }



    //block scoped - let & const

    let age =20 //outside block - global variable
const n=true //0 & 1
    if(age>18){
        let age="dilip" //inside block - local variable
        const n=30
        console.log("elegible for Vote")
        console.log(n+" "+age+" :Inside block") //dilip
      //  let age=true
    }

    console.log(n+" "+age+" : out side block") //20
   