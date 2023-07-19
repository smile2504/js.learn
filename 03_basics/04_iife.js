//Immediately Invoked Function Expressions (IIFE) - It is used to remove the pollution of global scope
//IIFE using function
(function chai(){
    console.log(`DB Connected`);
})(); //first () is used to declare IIFE inside which we declare function and second() is used to execute the function inside first ()


//IIFE using arrow function
( () => {
    console.log(`DB CONNECTED`);
} )();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
} )("Sen")


