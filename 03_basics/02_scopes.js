
//{}  -->Scope
//var c=300 we won't use var in modern JS
//let and const are block scoped variables
let a =300
if(true){
    let a =10 
    const b=20
}
// console.log(a); //300 because a is blocked scoped variable and it is not accessible outside the block ;



// console.log(a);
// console.log(b);
// console.log(c);

//NESTED SCOPE

function one(){
    const username ="Vishal"
    function two(){
        const website="youtube "
        console.log(username);

        
        
    }
    //console.log(website);//Reference error : website is not defined because it is not accessible outside the block where it is defined 
    two();
}
// one(); //This will print Vishal because the function two is called inside the function one and it has access to the variable username defined in function one 


if(true){
    const username="Vishal sharma "
    if(username==="Vishal sharma "){
        const website ="yt"
        console.log(username+website);

        
    }
    console.log(website );
    
}
console.log(username);//this will give a reference error because username is not defined in this scope


//++++++++++++++++++++Interesting ++++++++++++++++++

function addone(num){
    return num+1;
}

addone(5)
//---------------------------------
const addTwo = function(num){
    return  num +2;
}
addTwo(5)

