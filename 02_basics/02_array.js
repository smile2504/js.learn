const marvel_heroes = ["thor", "ironman", "spiderman"]
const  dc_heroes = ["superman", "flash", "batman"]
const indian_heroes = new Array("Shaktimaan", "Krrish")
// marvel_heroes.push(dc_heroes)  //push method "dc_heroes" array into "marvel_heroes" array by make whole "dc_heroes" as a single element.
// console.log(marvel_heroes);


//* Concat method 
const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

//* Spread method
const allNewHero = [...marvel_heroes, ...dc_heroes, ...indian_heroes]
console.log(allNewHero);
//* Note : concat and spread both method are same but only difference is that spread method is more preferred and it can combine more than two array in easy way.

const another_array = [1,2,3,[4,5],6,[7,8,[9]],0]
const real_array1 = another_array.flat(1)
const real_array2 = another_array.flat(2)
const real_array3 = another_array.flat(Infinity)
console.log(real_array1);
console.log(real_array2);
console.log(real_array3);
//* Note: the value inside flat(i.e 1, 2,Infinity) is used to remove the square bracket depth. Understand it by running the code

console.log(Array.isArray("Saurabh"));
console.log(Array.from("Saurabh"));  //it is use to make array of each element of strings, object etc.

let num1 =100
let num2 = 200
let num3 = 300
console.log(Array.of(num1,num2,num3));
