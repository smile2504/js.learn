//****** Function ******/
function sayName() {
console.log("S");
console.log("M");
console.log("I");
console.log("L");
console.log("E");
}
sayName()

function AddTwoNumbers(num1, num2) {  //num1 and num2 are parameters here
    let sum = num1 + num2
    return sum 
}
const result = AddTwoNumbers(2, 7) //2 and 7 is arguments here
console.log(result);

function ProductTwoNumbers(num1, num2) {
    return num1*num2
}
const product = ProductTwoNumbers(2, 5)
console.log(product);
console.log(ProductTwoNumbers(2,7));

function loginUserMessage(username) {
    if(!username){                     // !username means "username === undefined"
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`    
}
console.log(loginUserMessage());
console.log(loginUserMessage("Saurabh"));

//In real world if we make a shopping website then we don't how how much parameters will be sufficient for arguments so we can use this way
function calculateCartPrice(...num1){  //"..." is rest operator here which allow to print all the arguments in form of array. If we don't use rest operator the it will print only first argument.
    return num1
}
console.log(calculateCartPrice(200, 400, 600));

function calculateCartPrice1(val1, val2, ...num1) {     //It will print all the arguments in form of array except first and second arguments
    return num1
}
console.log(calculateCartPrice1(200, 199, 290, 209, 198));

// Object in Function

const user = {
    username: "Saurabh",
    prices: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}
handleObject(user)


//Array in Function

const myNewArray = [200, 300, 400, 500, 600]

function handleArray(anyArray) {
    return anyArray[2]   
}
console.log(handleArray(myNewArray));

