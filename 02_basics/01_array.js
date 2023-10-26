//Note: () - Parenthesis, {} - Braces/curly brackets, []- Square brackets 

// # Array declaration
const myArr = [1, 2, 3, 4, 5]
console.log(myArr);

// Another method to declare array
const myArr1 = new Array(1, 2, 3, 4, 5)
console.log(myArr1);

console.log(myArr[0]); // 0 is index vlue of array here


// # Array Methods

myArr.push(6)   //It is use to add the value in array
myArr.push(7)
console.log(myArr);

myArr.pop()    //It remove the last value of an array
myArr.pop()
console.log(myArr);

myArr.unshift(0)  //It is use to add the data at initial position
console.log(myArr);

myArr.shift()   //It remove the initial value of an array 
console.log(myArr);

console.log(myArr.includes(9));   //It is use to determine whether the element is present or not
console.log(myArr.includes(4));

console.log(myArr.indexOf(3))  //It is used to know the index value of an element of an array
console.log(myArr.indexOf(9))  // If the number will not present in that array then their index value will be always "-1"

const newArr = myArr.join() // "join" method join the array and convert its datatype into strings
console.log(newArr);

//slice and splice method

const myArr2 = myArr1.slice(1,2)
console.log("A ", myArr2);
console.log(myArr1);

const myArr3 = myArr1.splice(1,2)
console.log("B ", myArr3);
console.log(myArr1);

//Note: The slice() method can be used to create a copy of an array or return a portion of an array. 
//It is important to note that the slice() method does not alter the original array but instead creates a shallow copy. 
//Unlike the slice() method, the splice() method will change the contents of the original array.


