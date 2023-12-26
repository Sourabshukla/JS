//  {}    //block sccope
//var c=300        //global scope

let a=300


if(true){  //block scope
    let a=10;
    const b=20
   console.log("Inner :",a);   //Inner : 10 
}

console.log(a); //300
// console.log(b); //ReferenceError: b is not defined
//console.log(c); //30

 function one(){
    const username ="sourab"

    function two(){
        const website="website"
        console.log(username);
    }
    //child can access parent function
   // console.log(website);   //website is not defined outside scope
   two()
 }
 //one()


 if(true){
    const username="sourab"
    if(username==="sourab"){
        const website=" youtube"
        console.log(username + website); //sourab youtube
    }
    //console.log(website);//ReferenceError: website is not defined
 }


// console.log(username);

//+++++++++++++++++++++++ intresting ++++++++++++++++++


console.log(addone(5)); // hoisting wherever we declared it take acc to below and all
function addone(num){
    return num+1
}

//addTwo(5)  //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo=function(num){
    return num+2
}
addTwo(5)
// console.log(addTwo()); //TypeError: addTwo is not a function
console.log(addTwo(8));

// console.log(multiplyOne(4,6)) //TypeError: multiplyOne is not a function

const multiplyOne = (x , y)=> x*y; //arrow function
console.log(multiplyOne(4,6)); //24
