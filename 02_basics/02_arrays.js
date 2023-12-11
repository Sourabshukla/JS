const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
// console.log(marvel_heros);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][2]);

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//instead of above we can use spread meathod

// const all_new_heros=[... marvel_heros , ...dc_heros]
// console.log(all_new_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array=another_array.flat(Infinity)  //flat=>Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(real_another_array);
/* [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ] */

//   console.log(Array.isArray("sourab"));
//   console.log(Array.from("sourab")); //[ 's', 'o', 'u', 'r', 'a', 'b' ]
//  // from=>Creates an array from an iterable object.
// console.log(Array.from({name:"sourab"})); //[] gives empty array // intrestubg case in interview

// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3));  //Returns a new array from a set of elements.
//[ 100, 200, 300 ]

console.log(Array.of("sourab")); //[ 'sourab' ]
  