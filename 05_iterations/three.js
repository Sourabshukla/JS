// forof loop

// syntax  =>

 // for (const iterator of object) { //iterator' is declared but its value is never read.
    
// }

//The for...of loop is used to iterate through each element of the array.


// ["", "", ""]
// [{}, {}, {}]

// The loop runs five times because there are five elements in the array.
// During each iteration, it prints the entire array [1, 2, 3, 4, 5] to the console.

const arr1=[1, 2, 3, 4, 5]
for (const num of arr1) { // loop on array
   // console.log(arr1);
}

// This code snippet iterates through each element in the arr array and prints each element to the console
//  using a for...of loop in JavaScript. When you run this code, it will display each number from 1 to 5 in 
//  the console, each on a new line. down

const arr=[1, 2, 3, 4, 5]
for (const num of arr) { // loop on array
    //console.log(num);
}

const greetings="Hello World"
for (const greet of greetings) {

    //console.log(`each char is ${greet}`);
}


//Mapx 


const map=new Map()
map.set("name","John")
map.set("age",30)
map.set("city","New York")
map.set("email","sourab@gmail.com")
map.set("name","sou")// once we change the name it will rename above one to new one

// The following code uses a for...of loop to iterate over all key-value pairs in the map variable:
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

//console.log(map);

// for (const key of map) { 
//     console.log(key);// here we get output as normal only so for getting only key we have to follow below step
// }

//for only key
for (const [key] of map) {
   // console.log(key); 
}

//for key value both
for (const [key,value] of map) {
    //console.log(key,'-',value);
}

const myObject={
    'game1':'nfs',
    'game2':'crysis',
}
//TypeError: myObject is not iterable
// for (const [key,value] of myObject) {
//     console.log(key,value);//TypeError: myObject is not iterable
// }