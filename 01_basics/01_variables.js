const accountId=5644566;
let accountEmail ="Xyz@gmail.com"
var accountPassword = "12345"
accountCity="Jaipur"    // This is not a good way .
let accountState;//undefined

accountEmail="Abs@gmail.com"
accountPassword="54321"
accountCity="Rohtak"
  
// Prefer not to use Var because of issue in block scope and functional scope 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//Const -- We can not change or modify,is is fixed value
//let --