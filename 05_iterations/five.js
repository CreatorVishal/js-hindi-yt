//For each loop

// array.forEach(element => {
    
// });
//Like below example

const coding = ["js","ruby","python","cpp"]
// coding.forEach(function(items){
//     console.log(items);
    
// })

// ------------------
//You can also use arrow function

coding.forEach((item) =>{
    // console.log(item);
    
} )

// ------------'
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoding=[
    {
    languageName:"js",
    languageFileName:"java"},

    {
    languageName:"js",
    languageFileName:"java"
},
{
    languageName:"js",
    languageFileName:"java"
}
]

myCoding.forEach((item)=>{
    console.log(item.languageName,item.languageFileName);
    
})
