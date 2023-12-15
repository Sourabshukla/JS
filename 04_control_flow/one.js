//if conition

// if(condition){

// }


// < ,>, <=,>= , ==,!=, 


const  isUserLoggedIn=true
const temperature =41

// if(2=="2" ){ // here the numberr same but not datatype so will use strict checkong ===
//     console.log("executed");
// }

// if(2==="2" ){  // not equal it does not print anything because we didn't gave anything
//     console.log("executed");
// }
//if-else    conditional code
// if(temperature<16){
//     console.log("cool");
// }else{
//     console.log("temperature is normal heat");
// }


// if(temperature===41){
//     console.log("cool");
// }else{
//     console.log("greater than 50");
// }



// const score=200
// if(score>100){
//     const power="fly";
//     console.log(`user power :${power}`);
// }
// console.log(`user power :${power}`); //ReferenceError: power is not defined

//due to var can access outside of scope

// const score=200
// if(score>100){
//     var power="fly";
//     console.log(`user power :${power}`);
// }
// console.log(`user power :${power}`); 

//shorthand notation

// const balance=1000

// if(balance>500) console.log("test"),   // here we can write without scope
// console.log("test2");   // not good practise to write if else
// in one line with comma


// if(balance<500){
//     console.log("less than");
// } else if(balance<750){
//     console.log("between 500 and 750");
// }
// else if(balance<900){
//     console.log("less than 9000");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn=true
const debitCard =true
const loggedInFromGoogle=false
const loggedInFromEmail=true


//true condition all
// if(userLoggedIn && debitCard &&  2==2 ){ //check both condition 
//     console.log("allow to buy");
// }

//anyone condition is false so total false
//nothing will print because no else statement
if(userLoggedIn && debitCard &&  2==3 ){ 
    console.log("allow to buy");
}

if(loggedInFromEmail || loggedInFromGoogle || guestuser){  // or condition to check multiple condition
    console.log("User logged IN");
}

