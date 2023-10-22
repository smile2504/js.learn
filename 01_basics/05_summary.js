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


/***********************************************************************/

//----> Memory Allocation

//-> Stack memory allocation for Primitive data type: 
//In this we have given the copy of data and modification is also done on that copied data.
// Original value in the memory will not be modified
// It is call by value

let myName = "Saurabh"
let myPetName = myName
console.log(myName);
console.log(myPetName); 

myPetName = "Laltu"
console.log(myName);
console.log(myPetName);  // In this we can see that the value changes in "myPetName" didn't change the original value of "myName"


//-> Heap memory allocation for Non-Primitive data
// In this we give reference of original data and modification is done on original data
//Original value in memory will be modified
//It is call by reference

let userOne = {
    email: "ss@gmail.com",
    uid: "21BCS8101"
}

let userTwo = userOne
console.log(userOne.email); // To get the value from object
console.log(userTwo.email);

userTwo.email = "ss-7@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);  // Here we will see that by changing the email in "userTwo", there will be also modification of email in "userOne"