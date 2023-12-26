// const score=100
// const scoreValue=100.3
// const isLoggedIn=false
// const outsideTemp=null

// let userEmail;//undefined

//  const id=Symbol('123')// symbol=>Returns a new unique Symbol value.

//  const anotherId =Symbol('123')

// console.log(id===anotherId); //false
// const bigNumber=356464648975464n

// console.log(typeof bigNumber); //bigint


/* const heros=["shaktiman","nagaraj","doga"]
let myobj={
    name: "sourab",
    age: 22 

}

const myFunction =function(){
    console.log("hello world");
}

const outsideTemp=null
console.log(typeof outsideTemp ); //object
console.log(myFunction); //function
 */

//  stack (primitive)    , Heap(non-premitive or reference)


let name="hello"
let anotherName=name;
anotherName="world"
console.log(name);  //hello
console.log(anotherName);   //world
 
let user={
    email: "sou@gmail.com",
    upi: "user@ybl"
} 
let userTwo=user

userTwo.email="sourab@google.com"
console.log(user.email);    //sourab@google.com
console.log(userTwo.email);//sourab@google.com 
// Primitives are passed by Value, Objects are Passed by Reference
// undefined and null => primitive data types
