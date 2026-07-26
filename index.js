//day 8 Closures 
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();

function outer() {
    let x = 10;

    return function () {
        x++;
        return x;
    };
}

const a = outer();
const b = outer();
const c = outer();

console.log(a()); // ?
console.log(a()); // ?
console.log(b()); // ?
console.log(a()); // ?
console.log(b()); // ?