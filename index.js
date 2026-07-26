// practice time closure
const  counter = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    }
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3


const logiin  = () => {
    attempt = 0;
    return () => {
        if (attempt < 3) {
            attempt++;
            console.log(`You have ${3 - attempt} attempts left`);
        } else {
            console.log("Account locked");
        }
    }
}
const login = logiin();

console.log(login()); // Attempt 1
console.log(login()); // Attempt 2
console.log(login()); // Attempt 3
console.log(login()); // Account Locked
console.log(login()); // Account Locked