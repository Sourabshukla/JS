/* const score=400;
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString()); //100
console.log(balance.toString().length);//3
console.log(balance.toFixed(2)); //100.00

const otherNumber=24.8965
console.log(otherNumber.toPrecision(2));  //25

console.log(otherNumber.toPrecision(1));



const hundred =10000000;
console.log(hundred.toLocaleString()); // gives value in us dollar type to get know how many zeros

console.log(hundred.toLocaleString('en-IN')); // value in indian type
 */


// +++++++++++++++++++++ Maths + ++++++++++++++++++++++++++

/* 
console.log(Math.PI);
console.log(Math.LN10);

/* A numeric expression for which the absolute value is needed.
Returns the absolute value of a number 
(the value without regard to whether it is positive or negative). 
For example, the absolute value of -5 is the same as the absolute value of 5. */


/* console.log(Math.abs(-4));
  console.log(Math.round(5.3));
console.log(Math.round(5.9));

console.log(Math.ceil(4.2));//5 Returns the smallest integer greater than or equal to its numeric argument.


console.log(Math.floor(4.2));//4 Returns the greatest integer less than or equal to its numeric argument.

console.log(Math.sqrt(17));//4.12 The square root of a given number.
console.log(Math.sqrt(25));
console.log(Math.min(4,35,69,2));
console.log(Math.max(4,35,69,8)); */ 

console.log(Math.random());//Returns a pseudorandom number between 0 and 1.


console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
console.log(Math.ceil(Math.random()*10) + 1);


const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1)+min ))
console.log();