//Data types

//1. Primitive data types
//-- 7 types: String , Number, Boolean , null, undefined,Symbol,BigInt

//2 Reference(Non primitive)

//-- Array , Objects,Functions


//+++++++++++++++++++++++++++++++++++++

//Stack(Primitive ) , Heap(Non-Primitive )

let myYoutubename="Vishaldotcom"
let anothername = "Sharmaji"
console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"Vishalsharma@gmail.com",
    upi: "user@ybl"


}
let userTwo = userOne

userTwo.email ="Vishalsharma8950@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);