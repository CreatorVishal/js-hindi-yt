const user={
    username:"Hitesh",
    price:5990,
    welcomemessage: function(){
        console.log(`${this.username},Welcome to website  `);
        //this refers to the current context of the object 
        console.log(this);
    }
}

// user.welcomemessage()
// user.username="Vishal"
// user.welcomemessage()//this will print Vishal because we have changed the username property of the object 

console.log(this); //-->{}

// function chai(){
//     let username="Vishal"
//     console.log(this) //this will print the global object in the browser it will be window and in node it will be global  

// } 
// chai()
//--------------------------------------------------
// const chai= function (){
//     let username="Vishal"
//     console.log((this.username));
    
// }

const chai=  () =>{
    let username="Vishal"
    console.log((this.username));
    
}
// chai()


// const addTwo =(num1,num2)=>{
//     return num1+num2;

// }---basic arrow function 

//But we can also use as implicit return in arrow functions -- In this you don't need to add parantheses and return keyword 

// const addTwo=(num1,num2)=>num1+num2
//          OR
const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(5,6))


