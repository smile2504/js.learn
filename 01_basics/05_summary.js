/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive/Reference Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       
*/

//Arrays

const heroes = ["Shaktiman", "Ironman", "Thor"]
console.log(heroes);

//objects

let myObj={
    name: "Saurabh",
    age: 22,
}
console.log(myObj);

// Functions

const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction);



