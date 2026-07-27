// day 10 Array Methods  
const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Adds 6 to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

numbers.pop(); // Removes the last element (6) from the array
console.log(numbers); // Output: [1, 2, 3, 4, 5]

numbers.shift(); // Removes the first element (1) from the array
console.log(numbers); // Output: [2, 3, 4, 5]

numbers.unshift(0); // Adds 0 to the beginning of the array
console.log(numbers); // Output: [0, 2, 3, 4, 5]

const slicedNumbers = numbers.slice(1, 4); // Creates a new array with elements from index 1 to 3
console.log(slicedNumbers); // Output: [2, 3, 4]