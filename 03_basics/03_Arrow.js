const user ={
    username : "sourab",
    price:999, 

    welccomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
    }


};   
// user.welccomeMessage()
// user.username="sam"
// user.welccomeMessage()

//console.log(this); //{} when we are in node environment this refers to empty object because in global dont have object


//  function chai(){
//     let username="sou" // in function cant use this
//     console.log(this.username);
//  }
//  chai()

// const chai =function(){
//     let username="sou"
//     console.log(this.username);
// }

// chai()


// const chai =() => {
//     let username="sou"
//     console.log(this);
// }

// chai()


// arrow function
//   () => {}

//basic arrow function
//explicit return
// const addTwo=(num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,5));


// implicit return ---- no need of writing curly brackets and return statement
//  { }  => use return keyword
//  ()  => no use of return keyword

// const addTwo=(num1,num2) =>num1+num2
// const addTwo=(num1,num2) =>(num1+num2)


// console.log(addTwo(3,5));

const addTwo=(num1,num2) => ({username:"sourab"})


console.log(addTwo(3,5));


//in loop
// const myArray=[2,5,4,6,9,5] 

// myArray.forEach(function(){})
// myArray.forEach(()=>{})
// myArray.forEach(()=>())