//assuming truth value

// const userEmail="sou@gmail.com"

// if(userEmail){
//     console.log("got user email");
// }else{
//     console.log("dont have user email");
// }

//if empty string it consider as false

// const userEmail=""

// if(userEmail){
//     console.log("got user email");
// }else{
//     console.log("dont have user email");//dont have user email
// }

//if having empty array consider as true
// const userEmail=[]

// if(userEmail){
//     console.log("got user email"); //got user email
// }else{
//     console.log("dont have user email");
// }


//NOTES-----

//falsy valuse

// false,0,-0,BigInt 0n, "", null,undefined,NaN  other than this all are true 

//true values

//"0" (inside string),"false"(inside string true), " "(space inside empty string),[],{},function(){},
// any non-zero number (including BigInt) and non-empty strings, objects, arrays, or functions considered as true</s>

// if(userEmail.length===0){
//     console.log("array is empty")
// }

const emptyObj={}

if(Object.keys(emptyObj). length === 0){
    console.log("empty object"); 
}
console.log(typeof(emptyObj));

// below we checked in console
// false==0
        //o/p-// true
// false=="0"
      //o/p-// true
// false=""
 

//nullish coalescing operator (??):null undefined

// let val1;
// val1=5 ?? 10
// console.log(val1);//5

// let val1;
// val1=5 ?? 10
// val1=null ?? 10
// console.log(val1); //10

// let val1;
// val1= undefined ?? 15
// console.log(val1);//15

// let val1;
// val1=null ?? 10 ?? 15
// console.log(val1);//10


// ternary operator

// condition ? true : false;

const iceTeaPrice=100
iceTeaPrice<=80 ?console.log("less than 80"):console.log("greater than 80");


