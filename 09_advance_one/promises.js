// promise => is use for future purpose its like async 
// promise is like koi chij ko future me karne ke liye 
// agar promise hua to resolve hua and promise complete nhi hua so reject
const promiseOne= new Promise(function(resolve, reject){ 
    // Do an async task
    // DB calls, cryptography,network call

    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)

})


// promiseOne.then()=The callback to execute when the Promise is resolved.


promiseOne.then(function(){
    console.log("Promise one has been executed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asyn task two");
        resolve()
    },1000)
}).then(function(){  // we didnt store in any variable thats why we directly wrote .then
    console.log('Aync 2 resolved');
})



const promiseThree= new Promise(function(resolve,reject){
    // if data come from network

    setTimeout(function(){
    resolve({username :"sourab", email: "sourab@gmal.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username : "sou", password : "123"})
        }else{
            reject ("Invalid User")
        }

    },1000)
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username
} ).then( (username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() =>{
    console.log("the promise is either resolved or rejected");
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username : "javaScript", password : "123"})
        }else{
            reject ("Error : js Went wrong")
        }

    },1000)
})

// async => thodi der wait karta hai kaam ke hone ka agar aage badhta  hai to output de deta nhi to vahi error deta hai


// below error by mistake 
// async function consumePromiseFive({
//     const response= await promiseFive
//     console.log(response);
// })

// promiseFive is a object so esko promiseFive() es tarah se nhi le skte hai
// if error is false in above so statments of if condition so will not get any type of error
async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async await directly error ko handle nhi kar skte  we have to put them in try cath clock
//This error originated either by throwing inside of an async function without a catch block, 
// or by rejecting a promise which was not handled with .catch().

// ham then catch vaka bhi use kar skte hai and try cath bhi use kr skte hai

// async hai matlab usme kuch na kuch aayega hi so function likhenge

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     // becasue abhi jo data vo string me aara so usko json me karna 

//     //const data= response.json() // it take time so will not ge value promise pending so we have to use await
//     const data= await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ", error) ;
//     }

// }
// getAllUsers()

// writing using fetch

// for handling we have to use then  

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
}).then((data)=> {
    console.log(data);
})
.catch((error)=> { 
    console.log(error);
})
