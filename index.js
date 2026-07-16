var a; //dicilar
var a=12;  // dicilar and initialization
let b = 10;
const c = 20;
//var add in window object but let and const not add in window object
// fuction scoped 
// decalare fir se no error but let and const give error 
var a = 12;
var a = 13;
let b = 10;
let b = 11; // give error
 const discont = 20;
 // var fuction scoped and let and const block scoped
 function test(){
    if(true){
        var a = 12;
        let b = 10;
        const c = 20;
    }
    console.log(a); //12
    console.log(b); // error
    console.log(c); // error
 }
 test(); 

 //fuction scoped and block scoped


 // reasined and redeclared
 var a = 12;
 var a = 13; // no error
 a = 14; // reasined no error

 let b = 10;
 let b = 11; // error
 b = 12; // reasined no error

 const c = 20;
 const c = 21; // error
 c = 22; // reasined error