// //If

// if(3!=2){
//     //code to execute if condition is true
//     console.log("3 is not equal to 2" );
     
// }
// //Comparison operators
// // <,>,<=,>=,==,!=,===

// if(2==="2"){
//     //code to execute if condition is true
//     console.log("executed" );
     
// }

// const temperature =41
// if(temperature===41){
//     console.log("less than 50");
    
// }
// else{
//     console.log("greater than 50 ");
    
// }
// console.log("executed..");

// const score =200


// if(score>100){
//     let power="fly" //You can use let and const inside a block because they are blocked scope and you can not use var inside a block  
//     console.log(`user power:${power}`)
// }

// //Shorthand Statements 

// const balance=1000

// // if(balance>500) console.log("test"); //-->This is implicit return statement\

// //Nesting

// if(balance<500){
//     console.log("less than 500 ");
    
// }
// else if(balance<750){
//     console.log("less than 750 ");

    
// }
// else if(balance<900){
//     console.log("less than 900");
    
// }
// else{
//     console.log("less than 1100");
    
// }

const userLoggedIn = true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    console.log("Allow tp buy course");
    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("");
    
}