// singleton
// object.create
//object literals
const mySym =Symbol("mykey1")

const jsUser={
    name:"sourab",
    "full name":"Sourab Kumar Shukla",
    [mySym]:"mykey1",
    age:18,
    location:"hyderabad",
    email:"sourab@hitech.com",
    isLoggedIn: false,
    LastLoggenIn: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);//another type we can defined
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]); //mykey1
// console.log([mySym])//[ Symbol(mykey1) ]

// jsUser.email = "sourabh@chatgpt.com"
// Object.freeze(jsUser) // do not change the value if we freeze
// jsUser.email = "sourab@microsoft.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo=function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greetingTwo());