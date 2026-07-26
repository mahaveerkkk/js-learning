// day 9 objects deep dive 
let user1 = {
    name: "Mahaveer"
};

let user2 = user1;

user2 = {
    name: "Rahul"
};

console.log(user1.name);
console.log(user2.name);

let a = {
    x: 10,
    y: {
        z: 20
    }
};

let b = structuredClone(a);

b.y.z = 100;

console.log(a.y.z); // ?
console.log(b.y.z); // ?