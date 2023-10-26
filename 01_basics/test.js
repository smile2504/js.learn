const marvel_heroes = new Array("Thor", "Ironman", "Spiderman")
const dc_heroes = new Array("Superman", "Batman")
const indian_heroes = new Array("Shaktimaan", "Krrish")

const holly_heroes = marvel_heroes.concat(dc_heroes)
// console.log(holly_heroes);

const all_heroes = [...marvel_heroes, ...dc_heroes, ...indian_heroes]
// console.log(all_heroes);


// const another_array = [1, 2, [4, 5], [6, [7, [8]]]]
// const real_array1 = another_array.flat(1)
// console.log("A: ",real_array1);
// const real_array2 = another_array.flat(3)
// console.log("B: ",real_array2);
// const real_array3 = another_array.flat(Infinity)
// console.log("C: ",real_array3);

console.log(Array.from("Saurabh"));

let num1 = 100
let num2 = 200
let num3 = 300
console.log(Array.of(num1,num2,num3));