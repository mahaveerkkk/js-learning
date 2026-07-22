function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculate(x, y, operation) {
    return operation(x, y);
}

console.log(calculate(10, 20, multiply));