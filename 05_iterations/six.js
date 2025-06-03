const coding =["js","ruby","java","python"]

// const values = coding.forEach((item) => {
//     //console.log(item);
//     return item; //--> You can not use return in for Each loop
// })
// console.log(values);//undefined 


const myNums=[1,,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter((num)=>
//     num>4

// )--> By using filter method

// console.log(newNums); //[5,6,7,8,9,10]


//if you want to use for each method you can use it like this 

const newNums= []
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);


 

