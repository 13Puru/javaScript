const accountId = 144553
let accountEmail = "purab@gmail.com"
var password = "12345"
accountCity = "jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "12345670"
accountCity = "bengaluru" 
console.log(accountId);
/*
prefer not to use var
beacause of issue in block scope
and functional scope
*/
console.table([accountId, accountEmail,accountState, accountPassword, accountCity])