//Immediately  Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log(`Db connected`);

    
})(); //This is an IIFE  // Semicolon is must after the IIFE to avoid any issues with other scripts that may be loaded after the script.


// to remove global scope pollution we can use IIFE
//IIFE is a function that is executed immediately after it is defined .

( (name )=>{
    console.log(`Db connected 2, ${name}`);
    
})('Vishal sharma') //We can also pass parameters to the iife function 