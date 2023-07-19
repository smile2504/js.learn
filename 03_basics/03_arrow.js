const user = {
    username: "Saurabh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);   //It will described the current context 
    }
}
console.log(user.price);
user.welcomeMessage()
user.username = "Sen"
user.welcomeMessage()

function chai(){
    let username2 = "Saurabh"
    console.log(this.username2);
}
chai()

const chai2 = function () {
    let username2 = "Saurabh"
    console.log(this.username2);
}
chai2()

/*******Arrow Function *******/

//Declaration of arrow function into a variable
const chai3 = () => {    
    let username3 = "Saurabh"
    console.log(this.username3);
}

chai3()


const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,5));

//Implicit return in arrow function
const addTwoNum = (num3, num4) => num3 + num4
console.log(addTwoNum(3, 7));

                    //"or"//

const addTwoNumber = (num3, num4) => ( num3 + num4 )
console.log(addTwoNumber(3, 4));


const addName = (num3, num4) => ( {username4: "Saurabh" } )
console.log(addName()); 





