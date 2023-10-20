const accountId = 12345 
let accountEmail = "ss-7@gmail.com"
var accountPassword = "1234"

//In javaScript we can enter the value without using variable.
accountCity = "Patna"  // But it is not a good practice

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity])

//prefer not use var keyword because it create problem in scope, but use let keyword in place of var

// accountId = 2504  //The value written by using const keyword can't be modified
accountEmail = "ss@gmail.com"
accountPassword = "2504"
accountCity = "Chandigarh"


console.table([accountId, accountEmail, accountPassword, accountCity])