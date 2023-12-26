//console.log(2!=1);

/* console.log("2">1); //true
console.log("2>1"); //2>1 */

/* 
console.log(null>0);  //false
console.log(null==0);   //false
console.log(null>=0); */ //true   value comparison problem

//console.log(undefined==0);  //false


// note
//     the reson is that an equality check == and comparisons > <> = <= work differently

//     comparisons convert null to a number, treating it as 0 that's why null>=0 (0>=0  0=0 so return true)is true and null>0 is false
    


    // ===    checks for data type also 

    // console.log("2"===2); //false // strict comparison cheack for data type      string ===  int
    // console.log(2===2);  //true
    // The expression 2 === 2 is a strict equality comparison in JavaScript using the === operator. It checks whether the value on the left (2) is 
    // strictly equal to the value on the right (2).In this case, both sides have the same numeric value 2, 
    // and they are of the same type (both are numbers). As a result, the expression 2 === 2 evaluates to true.

    // console.log(undefined>0); //false
    // console.log(undefined==0);  //false
    // console.log(undefined<0);   //false

    // In general, when undefined is involved in comparisons with numeric values, 
    // the results will usually be false due to how undefined behaves in JavaScript comparisons.
    
    
