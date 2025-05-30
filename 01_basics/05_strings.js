const name="Vishal"
const repoCount =58

//console.log(name+ repoCount + "Value ");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//Another way to create a string 
const gameName = new String(`Vishal-sh`)
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //s
console.log(gameName.indexOf('h')); //3

const newString = gameName.substring(0,4)
console.log(newString); //Vish

const anotherstring = gameName.slice(-8,4) // we can give negative value also
console.log(anotherstring)

//trim or replace 

const newStringOne = "  Vishal  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://vishal.com/vishal%20sharma"

console.log(url.replace('%20', '--'))
console.log(url.includes('hy'))
