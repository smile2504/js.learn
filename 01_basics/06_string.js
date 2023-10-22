const name = "saurabh"
console.log(name);
console.log(`${name}`);
const repoCount = 50

console.log("My name is " + name + " and my repo count is " + repoCount)   // It is outdated methd
console.log(`My name is ${name} and my repo count is ${repoCount}`)  // It is modern method

//Another method to declare strings

const myName = new String('Saurabh')
console.log(`${myName}`);

console.log(myName[0])
console.log(myName[3])
console.log(myName[4])

console.log(myName.__proto__);

console.log(myName.length);             //to know the length of strings
console.log(myName.toUpperCase());      //to convert all the strings into upercase
console.log(myName.charAt(5));          //to know the character at any position
console.log(myName.indexOf('h'));       //to know the position of any character

//To cut the part of string using slice and substring method

console.log(myName.substring(3, 6));
console.log(myName.slice(3, 6));

//we can also do this by creating another method 

const newString = myName.slice(-7, 3)       //In slice we can also use negative value
console.log(newString);

const myTitle = "     Sen    "
console.log(myTitle);
console.log(myTitle.trim());      // trim method is used to remove the unwanted space give

//Replace method to replace the value within the string

const url = "https://saurabh.com/saurabh%17sen"
console.log(url.replace('%17', '-'));

//Use includes method to determine whether the specific string is present or not
console.log(url.includes('saurabh'));
console.log(url.includes('sharma'));

//Use split method to remove any symbol from whole string

const myAddress = "Charapatti-Nirmali-Supaul-Bihar-India"
console.log(myAddress.split('-'));       //it will remove '-' symbol and make array of all the strings

console.log(myAddress.bold());

