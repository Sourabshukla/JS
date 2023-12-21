const coding = ["js", "ruby", "java", "python", "cpp"]


//foreach 
//syntax
// array.forEach(element => {
    
// });
//coding.forEach(function name(){})// in callback function there is no name so will remove

//Performs the specified action for each element in an array.
//@param callbackfn — A function that accepts up to three arguments. 
//forEach calls the callbackfn function one time for each element in the array.
coding.forEach(function (num){
    //console.log(num);
}
);


//same with arrow function
coding.forEach((item)=>{
   // console.log(item);
})


function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)


coding.forEach((item,index, arr )=>{
   // console.log(item,index,arr);
})  
//output
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


const myCoding=[
    {
        lang:"js",
        version:5 
    },
    {
        lang:"py",
        version:3 
    },
    {
        lang:"java",
        version:22 
    },

]
myCoding.forEach((item)=>{
    //console.log(item.lang);
   // console.log(item.version);
   // console.log(item.arr);
})
