//iife => Immediately Invoked function Expression (IIFE)
/*Parentheses are used to contain the JavaScript code, and the term "immediate" refers to the fact that this 
pattern of wrapping JavaScript code*/

//  function chai(){
//     console.log(`DB CONNECTED`);
//  }
//  chai()
 
(function chai(){
   //named IIFE
   console.log(`DB CONNECTED`);
})();

// 2 IIFE likhte hai jab tab 1st vale ke baad ; lagna compulsory

//()()  //1st function defination 2nd execution call

 /*global scope ke pollution se priblem hoti hai kai baar so global scope ke jo variable hai usko hatane ke 
liye iife ko use krte hai*/

 // 1st code ko khatam hone ke baad ; lagana

 ((name)=>{
   //unnamed IIFE
   console.log(`DB Connect two ${name}`);
 })('sourab')  // direct gave parameter we can call chai('')
   


// (function aurcode(){
//    console.log(`DB Connect two`);
//  })
