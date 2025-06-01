function sayMyName(){
    console.log("V");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
} 

//sayMyName()

// function addTwoNumbers(a,b){
//     console.log(a+b);
// }
// addTwoNumbers(56,90)//-- 146  We can also store the return value in a variable

function addTwoNumbers(a,b){
    // let result =a+b;
    // return result; //You can also write it as return a+b ;
}

const result=addTwoNumbers(34,55)
// console.log("Result:",result);

function loginUserMessage(userName){
    return `${userName}just logged in`;

}
// console.log(loginUserMessage("Vishal Sharma "));

//If is there any undefinied value in the function,it will return undefined and you can simply handled by using if condition
function loginUserMessage2(username){
    if(username === undefined ){
        return "please provide your username "; 
    }
    return `${username}just logged in `;
}
// console.log(loginUserMessage2());

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000)); //but if there are more than one para,eter then you can use rest operatior 
  // But most of the time user write values along with rest operator then what will be the output see below code
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));

//In the above code , the first two values will be assigned to val1 and val2 and the rest of the values will be asigned to num1 as an array  


//how to pass an object as a parameter to a function  

const user ={
    username:"Vishal",
    price:199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username}and price is ${anyobject.price} `);
    
}
handleobject(user)  // typesafety is must 

//paas an array as a parameter to a function

const myNewArr=[200,400,500,3000]

function returnSecondValue(getArray){
    return getArray[2] //returning the second value of the array
}
console.log(returnSecondValue(myNewArr));



