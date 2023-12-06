/* const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null

let userEmail;//undefined

const id=Symbol('123')
const anotherId =Symbol('123')

console.log(id===anotherId);
const bigNumber=356464648975464n

console.log(typeof bigNumber);


 */

const heros=["shaktiman","nagaraj","doga"]
let myobj={
    name: "sourab",
    age: 22 

}

const myFunction =function(){
    console.log("hello world");
}

 Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)
const outsideTemp=null
console.log(typeof outsideTemp ); //object
console.log(myFunction); //function



//  stack (primitive)    , Heap(non-premitive or reference)
// stack=> will get copy
//Heap=> will get reference means whatever we change it changes the original value 

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
