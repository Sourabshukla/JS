const name="sourab "
const repoCount= 20

//console.log(name + repoCount); //older form not that much used

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

    // `` this is backticks in windows 11 below of esc button
// string interpolation

// const gameName = new String('sourab')
// console.log(gameName[0]);//s
// console.log(gameName[5]);//b
// console.log(gameName.__proto__);  //2 underscore
// console.log(gameName.length);//6
// console.log(gameName.toUpperCase());//SOURAB
// console.log(gameName.charAt(2));//u
// console.log(gameName.indexOf('r'));//3


const gameName = new String('sourab-sh')
const newString = gameName.substring(0,4)
//console.log(newString);   //sour

const anotherString= gameName.slice(-8,4)
//console.log(anotherString)  //our

const newStringOne="  sourab   "
// console.log(newStringOne);
// console.log(newStringOne.trim())  // remove extra space
//trim=>Removes the leading and trailing white space and line terminator characters from a string.



const url="https://sourab.com/sourab%20shukla"

// console.log(url.replace('%20' ,'-'))//https://sourab.com/sourab-shukla

//Replace=>Replaces text in a string, using a regular expression or search string.

// console.log(url.includes('chu')) //false
//includes=>Returns true if searchString appears as a substring of the result of converting this object to a String,
// at one or more positions that are greater than or equal to position; otherwise, returns false.

console.log(gameName.split('s'))   // in split not use the particular term 

//Split a string into substrings using the specified separator and return them as an array.

