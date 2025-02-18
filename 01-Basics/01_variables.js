const accountId = 12323
let accountName = "Ramesh"
var accountPassword = "9912" 
accountCity = "Delhi"
let accountState;

// accountId = 23  // not allowed
accountName = "Tejas"
accountPassword = "4599"
accountCity = "Mumbai"

/*
prefer not to use var keyword, because of issue in block scope and functional scope. 
*/
console.table([accountName, accountPassword, accountCity, accountState]);
