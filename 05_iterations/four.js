const myObject={
    js: 'javascript',
    cpp:'c+',
    py:'python',
    rb:'ruby'
}

//forin loop
//syntax
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {  //hasOwnProperty=> Determines whether an object has a property with the specified name.
//         const element = object[key];
        
//     }
// }


for (const key in myObject) {
    //console.log(myObject[key]); //will get all values
}


for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
//output
// js shortcut is for javascript
// cpp shortcut is for c+
// py shortcut is for python
// rb shortcut is for ruby



const programming =["js","rb","py","java","cpp"]

for (const key in myObject) {
    //console.log(key);
}


for (const key in programming) {
   // console.log(programming[key]);
}
