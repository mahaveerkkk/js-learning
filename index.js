//day 4 today lean function 
// function kya h
function sayHello(){
    console.log("Hello");
}
//here sayHello is a verible jiske under function value store h
function add() {
    return 10;
}

// console.log(add);

// console.log(add());

// let x = add;

// console.log(x());

// console.log(typeof add);



function add() {
    return 10;
}

let x = add;

add = 100;
console.log(add);
console.log(x());
