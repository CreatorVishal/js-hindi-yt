const userEmail=[]

if(userEmail){
    console.log("got user email");
    
}
else{
    console.log("don't have user email");
    
}

// Falsy value

//false,0,-0,BigInt ,null,undefined,"",NaN

//Truthy Value

//"0",'false'," ",[],{},function(){}

//if(userEmail.length===0){
// console.log("Array is empty");
//}
 // Same like this we can also check an object is empty or not 
 
 const emptyObj ={}

 if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
    
 }


 //Nullish Coalescing Operator (??):null undefined

 let val1;
 // val1 = 5?? 10 -->5
 //val1=null ??15 -->15
 //val1= undefined ?? 20 -->20
 val1 = null ?? 20 ?? 25

 console.log(val1);


 //Ternary operator 
 
//  condition ? true: false

const age=18
age>=18? console.log("You can vote ") : console.log("You can not vote");

