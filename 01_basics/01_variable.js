const accountId = 12345
let accountEmail = "ss-7@gmail.com"
var accountPassword = "1234"
accountCity = "Patna"
console.log(accountId);
console.table([accountEmail, accountPassword, accountCity])
/*
prefer not use var keyword because it create problem in scope, but use let keyword in place of var
*/

accountEmail = "ss@gmail.com"
accountPassword = "2504"
accountCity = "Chandigarh"


console.table([accountId, accountEmail, accountPassword, accountCity])