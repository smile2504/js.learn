/********************* Conversion *************************/
let age = 23
let uid = "21BCS8101"
let abc = null
let x1 = undefined
let x2 = true
let x3 = false
let x4 = 1
let x5 = ""

// Conversion into Numbers

let value1 = Number(uid)
console.log(value1)
console.log(typeof value1)

console.log(abc)
console.log(typeof abc)

let value3 = Number(abc)
console.log(value3);
console.log(typeof value3);

let value4 = Number(x1)
console.log(value4);
console.log(typeof value4);

let value5 = Number(x2)
console.log(value5);
console.log(typeof value5);

let value6 = Number(x3)
console.log(value6);
console.log(typeof value6);

// Conversion into Strings

let value2 = String(age)
console.log(value2)
console.log(typeof value2)

// Conversion into Boolean

let value7 = Boolean(x4)
console.log(value7)
console.log(typeof value7)

let value8 = Boolean(uid)
console.log(value8);
console.log(typeof value8);

let value9 = Boolean(x5)
console.log(typeof value9);
console.log(value9);

/******************** Operations *************************/

console.log(2+2)
console.log(2-2);
console.log(2*2)
console.log(2**3);
console.log(2/2)
console.log(2%2)

let str1 = "Saurabh"
let str2 = " Sen"
console.log(str1 + str2)

console.log(1 + 1 + "1")
console.log("1" + 1 + 1);

let num1 = 100
num1++
console.log(num1);

let num2 = 10
++num2
console.log(num2)