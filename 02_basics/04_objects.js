const tinderUser = new Object()
// const tinderUser={}
// console.log(tinderUser);

tinderUser.name="Vishal Sharma "
tinderUser.age=21
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser = {
    email: "Some@gmail.com",
    fullname:{
        userFullName:{
            firstname:"Vishal",
            lastname: "Sharma"
        }
    }

    
}
// console.log((regularUser.fullname.userFullName.firstname));

//We can also combine objects like an array we already know 

const obj1 = {1:"a",2:"b"} 
const obj2={3:"c",4:"d"}
// const obj3 = Object.assign({},obj1,obj2)  //Object.assign(target, source);
// console.log(obj3);

//Spread operator can also be used to combine objects

const obj3={...obj1,...obj2}
// console.log(obj3);

//when values come from database

const users=[{
    id:1,
    email:"v@gmail.com"
},
{
    id:3,
    email:"vs@gmail.com"
},{
    id:1,
    email:"v@gmail.com"
}
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn')); //--> returns true if the property exists in the object 
const course ={
    coursename : "Java Script ",
    price :"999",
    courseInstructor:"Hitesh ",

    
}
//Destructuring objects

const{courseInstructor:Inst}=course
console.log(Inst);


//When you want to dump your work on another -- we make api

// [
//     {},
//     {},
//     {}
// ]