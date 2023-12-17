//for loop

//syntax for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element);
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        //console.log("5 is the best number");
    }
    //console.log(element);
}

for (let i = 1; i <= 10; i++) {
   // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
       // console.log(`inner loop value ${j} and outer  loop ${i}`);
       // console.log(i + '*' + j + '=' + i*j);//table
    }    
}
let myArray=["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
}


//break and continue

//break=>A 'break' statement can only be used within an enclosing iteration or switch statement.ts(1105)
//continue=>A 'continue' statement can only be used within an enclosing iteration statement.ts(1104)


for (let i = 1; i <=20; i++) {
    if (i==5) {
      //  console.log("5 detected");
        break; // break the control flow
    }
    //console.log(`value of i is ${i}`);
    
}



for (let i = 1; i <=20; i++) {
    if (i==5) {
        console.log("5 detected");
        continue; // A 'continue' statement can only be used within an enclosing iteration statement.ts(1104)

    }
    console.log(`value of i is ${i}`);
    
}
