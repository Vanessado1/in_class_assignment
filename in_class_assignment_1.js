// Task 1

let x = 10;
if (x > 5) {
    console.log("help");
}

let expenses = 10000;
if (expenses > 7000) {
    console.log("High Expenses");
} else {
    console.log( "Manageable Expenses");
}

// Task 2
let score = 75;
if (score >= 60) {
    console.log("Passed");
} else {
    console.log("Failed");
}

// Task 3
for (let index = 10; index >= 1; index--) {
    console.log(index);
}
// Task 4 
let num =2;
while(num <= 10){
    console.log(num);
    num += 2;
}

// Task 5
function calculateSquare(amount) {
    return amount * amount;
    
}
console.log(calculateSquare(4));// Output 16