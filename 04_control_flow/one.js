//If-else Statement
const balance = 400;
if (balance >500 ) {
    console.log(`Balance is greater then 500`);
} else {
    console.log(`Balance is less than 500`);
}


const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("Allow the user to buy course");
}


const loggedInFromEmail = false
const loggedInFromGoogle = false
const GuestLoggedIn = true

if (loggedInFromEmail || loggedInFromGoogle || GuestLoggedIn) {
    console.log("User is Logged In");
}

//Switch-case : Syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
 switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
 
    default:
        console.log("Default value");
        break;
 }

 //If vwlue is strings
 const week = "mon"

 switch (week) {
    case "mon":
        console.log("Monday");
        break;
    case "tue":
        console.log("Tuesday");
        break;
    case "sun":
        console.log("Sunday");
        break;
 
    default:
        break;
 }



