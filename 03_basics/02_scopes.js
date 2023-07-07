//**** Scopes ****/

let a = 30  //All the value outside {} are global scope

if (true){    //All the value inside {} are local scope in functions and if-else
    let a =300
    const b = 20
    console.log("Inner: ",a); //It will print the value present in local scope
}
console.log(a); //It will print the value present in global scope

// Note: In case of 'var' keyword it doesn't satify the condition of local and global scope so we used to avoid the 'var' keyword in JavaScript.


//**** Nested Scopes ****/
//For function
function one() {
    const username ="Saurabh Sen"

    function two() {
        const website = "YouTube"
        console.log(username);  //We can execute the value of outer function or scope into inner function or scope.
    } 
    // console.log(website);  //We can't execute the value of inner function or scope into outer function or scope.
    two()
}
one()

//For if-else statement
if (true) {
    const username = "Saurabh Sen"
    
    if (username === "Saurabh Sen") {
        const website = " YouTube"
        console.log(username + website);  //We can execute the value of outer if statement or scope into inner if statement or scope.
    }
    // console.log(website);  //We can't execute the value of inner if statement or scope into outer if statement or scope.
}
// console.log(username);    //We can't execute the value of inner if statement or scope into outer if statement or scope.


