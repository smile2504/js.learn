//### Object Literals / Non-singleton object

//***Adding symbol in object */
const mySym = Symbol("Key1")

const myBio = {
    name: "Saurabh",
    "full name": "Saurabh Sen",
    [mySym]: "Mykey1",
    age: 21,
    email: "ss-7@gmail.com",
    location: "Patna",
    isLoggedIn: true,
    lastLoggedIn: ["Monday","Thrusday","Sunday"]
}
// console.log(myBio.name) // method to print the value present inside object
// console.log(myBio["location"]); // another method to print the value inside object
// console.log(myBio["full name"]);  // we can't use first method to print this type of value present inside object

// console.log(myBio); // method to print all the value of object
myBio.location = "Chandigarh" //method to change the value present inside object
console.log(myBio);

console.log(myBio[mySym]); //method to print the symbol

// Object.freeze(myBio) //method to freeze the object so that no further change inside the object can be allowed
// myBio.location = "Supaul"
// console.log(myBio.location);

//*** Function adding in object
myBio.greeting = function(){
    console.log("Hello JS user");
}

myBio.greeting2 = function(){
    console.log(`Hello, ${this.name}`);
}
//  console.log(myBio.greeting()); //method to print the function added in object
//  console.log(myBio.greeting2());
//  console.log(myBio);





