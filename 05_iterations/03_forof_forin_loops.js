//****Forof loops on Array */

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }


// const greetings = "Hello world!"

// for (const greet of greetings) {
//     console.log(greet);
//     if (greet ==" ") {
//         break
//         }
// }


//*******Maps********//

const map = new Map()
 map.set('IND', 'India')
 map.set('IND', 'India') //Even if we write same map multiple times it will print only one times
 map.set('USA', 'United State of America') //So map prints unique value
 map.set('AUS', 'Australia')
 map.set('NZ', 'Newzealand')

//  console.log(map);

//***Forof loops on map */
 for (const [key, value] of map) {
    // console.log(key, ":-", value);
 }


 //******** loops on object *******/

const myObject = {
    JS: 'JavaScript',
    CPP: 'C++',
    rb: 'Ruby'
}

// forof loop not works for object but we can use forin loops for objects

for (const key in myObject) {
    // console.log(`${key} stands for  ${myObject[key]}`);
}

//*************** for in loops on array ***********/

const programming = ["Java", "JavaScript", "Php", "Python", "Swift"]
for (const key in programming) {
    console.log(key);
}
for (const key in programming) {
    console.log(programming[key]);
}
for (const key in programming) {
    console.log(`${key} :- ${programming[key]}`);
}


//Notes: Used forof loops for array and forin loops for objects


