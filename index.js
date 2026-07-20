let user = "";
let guest = "Guest";

console.log(user || guest);
console.log("" || "Mahaveer");
console.log(false || 0 || "" || null || undefined || "Mahaveer");

console.log(1 && "Hello" && [] && {} && "JS");

console.log("" && 100);

console.log([] || {});