//syntax

// function name(params) {
    
// }


function sayMyName(){
    console.log("S");
    console.log("o");
    console.log("u");
   
    console.log("r");
    console.log("a");
    console.log("b");

}

// console.log(sayMyName());

// function addTwoNumbers(number1,number2){  // parameter
//     console.log(number1 + number2); 
//     //NaN output if does not call return statement
// }
// const result=addTwoNumbers(3,4) //arguments (when callong function)

// console.log("Result: ", result); // undefined


function addTwoNumbers(number1,number2){  // parameter
    return number1 + number2; 
    console.log("sourab"); // after return nothing will print Unreachable code detected
}
const result=addTwoNumbers(3,4) //arguments (when callong function)

// console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("sourab"))//sourab just logged in

function loginUserMessage(username="sam"){  //by default value sam
    if(username===undefined){  // or (!username)
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`   //sam just logged in 
}

console.log(loginUserMessage())//undefined just logged in

//... spread or rest operator  if we gave only 1 parameter and in argument gave extra value so we use   ...  operator it means gather all
//    ...   =>  rest operator

function calsulateCartPrice(...num1){
    return num1
}
// console.log(calsulateCartPrice(5,25)); //  [5,25]

const user ={

    username:"sourab",
    price :199

}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username } and price is ${anyobject.price}`);
}
handleObject(user)

handleObject({
    username:"sam",
    price:399 
})




const myNewArray =[200,400,100,600]

function returnSecondsValue(getArray){
    return getArray[1]
}
console.log( returnSecondsValue(myNewArray)); //400
