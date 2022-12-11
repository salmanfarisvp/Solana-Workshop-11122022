// // basic data types 

// console.log("Hello From JS"); // String
// console.log(1234567890); // int
// console.log(1234567890 / 1234567); //bigint
// console.log(true); // boolean
// console.log(typeof(error));
// console.log(typeof(null));

// // console.log("Hello From JS");
// // console.log("Hello From JS");

// console.log("--------------------")
// //--------------------//
// // Control statement if else 
// var a = "12345";
// a = 6789;
// let b = 56789
// console.log(typeof (a));// typeof() to return a data type 
// const s = 10;
// console.log("constant number is " + s);

// if (a > b) {
//     console.log("A is greaterthan B");
// }
// else if (a < b) {
//     console.log("B is greaterthan A ");
// }
// else {
//     console.log("A is equal to B");
// }

// console.log("--------------------")
// //--------------------//


// // basic loop - For loop

// for (let i = 0; i <= 5; i++) {
//     console.log("The Itrating for loop number is " + i);
// }

// // Do - While loop

// let j = 0
// while (j < 5) {
//     j++
//     console.log("The Itrating do while loop is " + j);
// }

// console.log("--------------------")
// //--------------------//

// const Aarray = [12345, "hello", true, [123,"456ABC"]];
// console.log(Aarray[0][0]);

// console.log("--------------------")
// //--------------------//

// // JSON -Java Script Object Notation - non-primtive data type. 
// // basdd on key values paires

// const Pname = {
//     firstName:"Salman",
//     secondName:"Faris",
//     Company:{
//         CName: "Nebra",
//         Place: "UK",
//     }
// };

// console.log(Pname.firstName);


// console.log("--------------------")
// //--------------------//


// try{
//     const a =10;
//     a =12;
// }catch(err){
//     console.log(err);
//  }


// console.log("--------------------")
// //--------------------//

// // functions

// function sq(x){
//     return x*x;
// }

// console.log("Sqaure of 5 is "+sq(5));

// console.log("--------------------")
// //--------------------//


// // arrow functions
// const AarrayFunc = [1,2,3,4,5];

// console.log("--------------------")
// //--------------------//



// console.log("--------------------")
// //--------------------//

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));



