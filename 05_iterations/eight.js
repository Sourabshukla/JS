// reduce js 
//this can be use in shopping cart or shopping things like we can add all the things  
//specially more used in shopping 



// const myNums= [1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc :${acc} and currval :${currval}`);
//     return acc + currval;
// }, 0)   //gioving acc value as zero

//Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

//giving comma becacause acc value is initially empty zero


//console.log(myTotal);



const myNums= [1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc :${acc} and currval :${currval}`);
//     return acc + currval;
// }, 3)  //giving acc value is 3 
//after gfiving comma whaterver we gave accumlator value it take start with that 
// console.log(myTotal);

//after giving value acc(accumlator) value as 3 the output is 

/* acc :3 and currval :1
acc :4 and currval :2
acc :6 and currval :3
9  */ 



//by using arrow function

const myTotal=myNums.reduce( (acc,curr)=> acc+curr,0)

// console.log(myTotal);


const shoppingCart=[
    {
        itemName: "js Course",
        price :2999
    },
    {
        itemName: "python Course",
        price :4000
    },
    {
        itemName: "mobile dev Course",
        price :5000
    },
    {
        itemName: "DS Course",
        price :12999
    }
]

const myTotal1=shoppingCart.reduce( (acc,item ) => acc+item.price, 0)
console.log(myTotal1) ;