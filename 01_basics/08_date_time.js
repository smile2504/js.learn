/************** DATE AND TIME ****************/
// Note: Date is taken from the reference of 1st January 1970.

let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);  // Type of date in JS is Object

//# Various method to represent thr date in various format
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

console.log(myDate.getMonth()+1);  // 1 is added because we know in JS month count is started from 0 and it will not covienance to end user.
console.log(myDate.getDay());
console.log(myDate.getDate());


//# To make our own date 
let myCreatedDate = new Date(2023, 0, 23)    // Month is started from 0 or 01
console.log(myCreatedDate.toDateString());

//# To make our own date with time
let myDateTime = new Date(2023, 06, 26, 8, 52)
console.log(myDateTime.toLocaleString());

//# Time stamp
let myTimeStamp = Date.now() //we can write "new Date()" or "Date.now()"
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//# Time stamp is always in milliseconds 
//# To convert it into seconds divide it by 1000. So that it can make aour comparison easier.

console.log(Math.floor(Date.now()/1000)); //"Math.floor" is used to take the adjact value

// We can use date format according to our will by changing like this.
let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long"
})



