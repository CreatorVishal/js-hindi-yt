// for in loop

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
// -----------------------------
const obj ={
    js:'Javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple "
}

for (const key in obj) {
    console.log(`${key} Shortcut is for  ${obj[key]}`);   
   
}


const programming =["js","cpp","rb","py"]
for (const key in programming ) {
    console.log(`${key} is ${programming[key]}`);
    
   
}

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")

// for (const key in map) {
//     console.log(key);
    
   
// } // you can not use directly for in loop with map 
//but you can use for of loop with map