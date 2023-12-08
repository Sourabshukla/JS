/* //Dates

let myDate=new Date()
console.log(myDate); 
//2023-12-08T14:57:08.731Z
console.log(myDate.toString());//Returns a string representation of a date. The format of the string depends on the locale.
//Fri Dec 08 2023 20:27:08 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());//Returns a date as a string value in ISO format.

//2023-12-08T14:57:08.731Z
console.log(myDate.toJSON());//Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
//2023-12-08T14:57:08.731Z
console.log(myDate.toDateString());//Returns a date as a string value.
//Fri Dec 08 2023
console.log(myDate.toLocaleString());//Converts a date and time to a string by using the current or specified locale.
//8/12/2023, 8:31:05 pm

console.log(typeof myDate);  //object 

let myCreatedDate=new Date(2023,0,23)// in js months starts with 0
console.log(myCreatedDate);   //2023-01-22T18:30:00.000Z

console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
 */
/* let myCreatedDate1=new Date(2023,0,23, 5,3)
console.log(myCreatedDate1.toLocaleString());// 23/1/2023, 5:03:00 am
// we have to write numbers for time like for am we have to write in 00-12 and for pm 13-23
let myCreatedDate=new Date(2023,0,23, 18,33)
console.log(myCreatedDate.toLocaleString());// 23/1/2023, 6:33:00 pm

let myCreatedDate2=new Date(2023,0,23, 16,33,50)
console.log(myCreatedDate2.toLocaleString());// 23/1/2023, 4:33:50 pm

 */
/* let myCreatedDate3=new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString());//14/1/2023, 5:30:00 am

let myCreatedDate1=new Date("2023-00-14")
console.log(myCreatedDate1.toLocaleString()); *///Invalid Date


let myCreatedDate=new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());//14/1/2023, 12:00:00 am


let myTimeStamp =Date.now()  //Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

//console.log(myTimeStamp);//1702048681166

//console.log((myCreatedDate.getTime()));//Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

// will get ans in mili seconds here will use .getTime method to get the excat seconds 

/* console.log(Date.now()); // 1702049691862 in miliseconds
 
console.log(Date.now()/1000); //1702049729.706

console.log(Math.floor(Date.now()/1000));  //1702049780

 */



let newDate = new Date()
console.log(newDate);

/* console.log(newDate.getDate());  //8
console.log(newDate.getMonth()+1); //12

console.log(newDate.getMonth()); //
console.log(newDate.getFullYear()); //2023
console.log(newDate.getHours());

console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);
//5 and the time is 1702050088286

 */
console.log(newDate.toLocaleString('default' ,{
    //weekday:"narrow" //f
    //weekday:"long" //friday
    weekday:"short" //fri
}));
