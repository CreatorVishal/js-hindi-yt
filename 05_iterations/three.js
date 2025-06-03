//For of loops

//--->Array specific loops

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
    
}

//-->string specific loop
const greetings="Hello world"
for(const greet of greetings){
    // console.log(greet);
    console.log(`each char is: ${greet}`);

    
    
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);
for(const [key,value] of map){
    console.log(key,':-',value);
    
}

//if there is any object can be used with for of loop
const obj ={
    Game: 'NFS',
    Game2:'FIFA'
} 
// for(const [key,value] of obj){
//     console.log(key,':-',value);
    
// }-- > we can not use for of loop with objects directly
//--> we can use for in loop with objects 