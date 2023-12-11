// singleton
// const tinderUser = new Object() // this is singleton object
const tinderUser={} // we can declare in this way also but this is not a singleton
tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false


//console.log(tinderUser); //{ id: '123abc', name: 'sam', isLoggedIn: false }

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sourab",
            lastname:"shukla"

        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2)  //objects=>Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
 
const obj3={...obj1, ...obj2}  //spread operator

//console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"

    },
    {
        id:1,
        email:"h@gmail.com"

    },
    
    {
        id:1,
        email:"h@gmail.com"

    }
    

]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//Returns an array of key/values of the enumerable properties of an object
console.log(tinderUser.hasOwnProperty("isLoggedIn"));// true    Determines whether an object has a property with the specified name.
console.log(tinderUser.hasOwnProperty("isLoggedof"));//false