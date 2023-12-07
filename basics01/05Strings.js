const name="sourab "
const repoCount= 20

//console.log(name + repoCount+ "value"); //older form not that much used

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

    // `` this is backticks in windows 11 below of esc button
// stribg interpolation

//const gameName = new String('sourab')
/* console.log(gameName[0]);
console.log(gameName[5]);
console.log(gameName.__proto__);  //2 underscore
console.log(gameName.length);
console.log(gameName.toUpperCase()); */
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('r'));


const gameName = new String('sourab-sh')
const newString = gameName.substring(0,4)
console.log(newString);   //sour

const anotherString= gameName.slice(-8,4)
console.log(anotherString) 

const newStringOne="  sourab   "
console.log(newStringOne);
console.log(newStringOne.trim())  // remove extra space


const url="https://sourab.com/sourab%20shukla"

console.log(url.replace('%20' ,'-'))

console.log(url.includes('chu'))

console.log(gameName.split('s'))   // in split not use the particular term 

