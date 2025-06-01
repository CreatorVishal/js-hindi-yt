const marvel_heros =["thor", "Ironman","spiderman"]
const dc_heros =["superman", "flash", "batman"]

//    ..push on existing array but concat returns new arr  
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros.length);
// console.log(marvel_heros[3] [1]);

// const allheros=marvel_heros.concat(dc_heros);
// console.log(allheros);
// console.log(allheros.length); //-->6

// // Another method is Spread Method 

// const all_new_heros=[...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const another_array=[1 ,2,3 ,[ 4 , 5 , 6 ] , 7 ,[ 6 , 7 , [ 4 , 5 ]]];

const real_another_array= another_array.flat(Infinity) //But we have to give actual depth

console.log(real_another_array);

console.log(Array.isArray("Vishal")); //--->False
console.log(Array.from("Vishal"));
console.log(Array.from({name:"Vishal"})); //interesting --[]


let score1= 100
let score2= 200
let score3=300

console.log(Array.of(score1,score2,score3)); // [100,200,300]













