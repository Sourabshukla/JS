//console.log(2!=1);

/* console.log("2">1); //true
console.log("2>1"); //2>1 */

/* 
console.log(null>0);  //false
console.log(null==0);   //false
console.log(null>=0); */ //true   value comparison problem

//console.log(undefined==0);  //false


/*note
    the reson is that an equality check == and comparisons > <> = <= work differently

    comparisons convert null to a number, treating it as 0 that's why null>=0 is true and null>0 is false
    */


    // ===    checks for data type also 

   /*  console.log("2"===2); //false
    console.log(2===2);  *///true


    console.log(undefined>0); //false
    console.log(undefined==0);  //false
    console.log(undefined<0);   //false

    
    