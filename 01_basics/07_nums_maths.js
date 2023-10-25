/****************** Numbers *******************/
/*
const score = 400
const balance = new Number(500)
console.log(score);
console.log(balance);

// Use toString() method to convert the number into string, it also further allow to use the methods of strings
console.log(balance.toString());
console.log(balance.toString().length);

//toFixed() method add decimal value
console.log(balance.toFixed(2));

//toPrecision() method is used to precise the value from starting
const num1 = 123.8998796
console.log(num1.toPrecision(3));
console.log(num1.toPrecision(5));
console.log(num1.toPrecision(1));

//toLocaleString() method is used to convert the number in standard format
const num2 = 1000000000
// to convert it into international number system
console.log(num2.toLocaleString());
//to convert it into Indian number system
console.log(num2.toLocaleString('en-IN'));

//Various other methods are
console.log(Number.MAX_VALUE); //to know thw maximum number possible in JavaScript
console.log(Number.MIN_VALUE);  //to know thw minimum number possible in JavaScript
console.log(Number.MAX_SAFE_INTEGER);  //to know the maximum safe number possible in JavaScript
console.log(Number.MIN_SAFE_INTEGER);  //to know the minimum number possible in JavaScript
console.log(Number.NEGATIVE_INFINITY); 
console.log(Number.POSITIVE_INFINITY); 
console.log(Number.NaN); 

*/

/**************************** Maths in JS ******************************/


console.log(Math);
console.log(Math.sqrt(4));    //it helps to find square root
console.log(Math.abs(-111.883));      //it is absolute method used to make the value positive
console.log(Math.round(4.569));       //it gives the round value by removing decimal
console.log(Math.ceil(4.2));          //it gives the next near value by removing decimal
console.log(Math.floor(4.8));         //it gives the previous near value by removing decimal
console.log(Math.min(3, 7, 5, 1, 8));     //it gives minimum value
console.log(Math.max(3, 7, 9, 2, 1, 8));   //it gives maximum value


//Math.random() method
console.log(Math.random());  //It always give the value between 0 and 1

// We can apply mathematical operatiion on the Math.random to get random number according to our will.
//Like we want random number between 1 to 6 each time as it happen in Ludo
// So the operation will be like this 
const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max - min + 1) + min));
