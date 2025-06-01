// two ways -->object literals and another is by using constructor 

//object literals

const mysym=Symbol("Key1")

const JsUser={
    name:"Vishal",
    age:21,
    [mysym]:"My key1",
    location:"Haryana",
    emailid:"Vishalsharma805966@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]



}

//Two ways to access the properties of an object
console.log(JsUser.age);
console.log((JsUser["emailid"]));
console.log(JsUser[mysym]);

JsUser.age=22;
// Object.freeze(JsUser);//freeze the object so that it cannot be modified
JsUser.age=23;
console.log(JsUser.age);

JsUser.greeting = function(){
    console.log("Hello, Jsuser ");
    
}
JsUser.greeting2 = function(){
    console.log(`Hello, Jsuser ${this.name}`);
    
}
// console.log(JsUser.greeting);-->[Function(anonymous)]

console.log(JsUser.greeting());
console.log(JsUser.greeting2());


