// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item

// })
//  console.log(values);


const myNums=[1,2,3,4,5,6,7,8,9,10];

// let newNums=myNums.filter((num)=>num>4)  //filter=>Returns the elements of an array that meet the condition specified in a callback function.

// console.log(newNums);


// const newNums=myNums.filter( (num) => { 
//        return num>4    // when we start filter in in scope so we have to use returm keyword
// })
// console.log(newNums);


// const newNums=[]

// myNums.forEach( (num) =>{
//     if (num>4) {
//         newNums.push(num)
//     }

// })
// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks= books.filter((bk) =>bk.genre==="History" )
  let userBooks1=books.filter( (bk) => bk.publish>=2000)
  //by using return keyword brcause we use scope//const userBooks1=books.filter( (bk) => { return bk.publish>=2000})
  const userBooks2=books.filter( (bk) => bk.publish>=1995)

  
  //console.log(userBooks);

  //console.log(userBooks1);
  //console.log(userBooks2);

//   const userBooks3=books.filter( (bk) => {
//     return bk.publish>=1995 && bk.genre=="History"

// })

// console.log(userBooks3);


const userBooks3=books.filter( (bk) => {
    return bk.publish<=2001

})

console.log(userBooks3);


