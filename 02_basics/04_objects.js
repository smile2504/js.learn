//### Singleton object   
//*** Another method to declare object
const tinderuser = new Object()

 tinderuser.id = "21BCS8101"
 tinderuser.name ="Saurabh Sen"
 tinderuser.isLoggedIn = false

 console.log(tinderuser);

 //***Nested Object */

 const name = {
    studentName: {
        cseStudentName:{
            firstName: "Saurabh",
            secondName: "Mukul",
            thirdName: "Shubham",
        }
    }
 }

 console.log(name.studentName.cseStudentName.firstName);


 //***Combining two or more objects in single object */

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "c", 4: "d"}
 const obj3 = {5: "e", 6: "f"}
//method 1 to combining the objects
 const myObj = Object.assign({}, obj1, obj2, obj3)  //{} is not mandatory but if we use it we can add a new target object in which all source object will be combined, But if we do not use this then all the object will combined and stored in first object.
 console.log(myObj);

 //method 2 that is spread method for combining the objects
const myobj1 = {...obj1, ...obj2, ...obj3}
console.log(myobj1);

// method to get the keys or value of object
console.log(Object.keys(tinderuser)); //this method will give all the keys of object into an array
console.log(Object.values(tinderuser)); //this method will give all the values of object into an array
console.log(Object.entries(tinderuser)); //this method make arrays of each entries of object

console.log(tinderuser.hasOwnProperty('isLoggedIn')); //this method in object is used to determine whether the property mentioned is present inside object or not



