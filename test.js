//console.log("sourab")
const accountId=101;
let accountEmail="sou@gmail.com";
var accountPassword="2121"; //js compiler automatically takes which type it is 
accountCity="hyd"
//accountId=22;    error can not change value of const once it already defined above
/*
prefer not use var because issue in block scope and functional scope
*/
//console.log(accountId);
//console.log(accountEmail);
//console.log(accountPassword);
// instead of writing all the things console.log every time we can use console.table gives the value in table
accountEmail="rab@gmail.ccom"
console.table([accountEmail,accountId,accountPassword,accountCity])
