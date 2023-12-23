// const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNum=myNumbers.map((num) =>num+10)
// console.log(newNum); /* [
 /* [
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
  ]*/
  
//using scope but not using return 
// const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNum=myNumbers.map((num) =>  {num+10})
// console.log(newNum); 
/*Output=> [
    undefined, undefined,
    undefined, undefined,
    undefined, undefined,
    undefined, undefined,
    undefined, undefined
  ]*/

//by using scope
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
//const newNum=myNumbers.map((num) => {return num+10})
//console.log(newNum);
/*[
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
  ]*/


//   const myNums=myNumbers
//                 .map((num)=>num*10)
//                 .map((num)=>num+1)

//   console.log(myNums);
  /* [
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]*/

const myNums=myNumbers
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40) //filter=>Returns the elements of an array that meet the condition specified in a callback function.

console.log(myNums);
/* [
  41, 51,  61, 71,
  81, 91, 101
]*/