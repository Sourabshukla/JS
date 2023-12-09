// arrays

const myArr=[0,1,2,3,4,5]
//console.log(myArr[0]); //0
//console.log(myArr.length); //6
const myHero=["shaktiman", "sou"]

const myArr2=new Array()

//Array Methods 

//myArr.push(6)  //Appends new elements to the end of an array, and returns the new length of the array.
//myArr.push(7)
//console.log(myArr); //0,1,2,3,4,5,6,7
//myArr.pop(7)//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

//console.log(myArr);  //0,1,2,3,4,5,6

//myArr.unshift(9)  //Inserts new elements at the start of an array, and returns the new length of the array

//console.log(myArr);  


//myArr.shift()
//console.log(myArr);  //[ 0, 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(19)); //-1 because not ther en in index
// console.log(myArr.indexOf(5)); //5

// const newArr=myArr.join()  //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);  //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //0,1,2,3,4,5
// console.log(typeof(newArr)); //string


//slice, splice

console.log("A", myArr);  //A [ 0, 1, 2, 3, 4, 5 ]
const myn1=myArr.slice(1,3)   //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log(myn1);//[1,2]
console.log("B", myArr);// B [ 0, 1, 2, 3, 4, 5 ]

const myn2=myArr.splice(1,3)  //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log("c", myArr);
console.log(myn2);

