//{}//scope
//var c=300 //global scope

let a=300


if(true){  //block scope
    let a=10;
    const b=20
   //console.log("Inner :",a);
}

//console.log(a);
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
        //console.log(username + website);
    }
    //console.log(website);//ReferenceError: website is not defined
 }


//console.log(username);

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