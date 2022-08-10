function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    return operator(a, b);
}

let addResult = operate(1, 2, add);
let subtractResult = operate(1, 2, subtract);
let multiplyResult = operate(1, 2, multiply);
let divideResult = operate(1, 2, divide);

console.log(addResult);
console.log(subtractResult);
console.log(multiplyResult);
console.log(divideResult);

for (let i = 0; i < 5; i++) {
    console.log(`This is loop ${i}`);
}



// This could've been done better but yeah... just messin around with it
function sumAllBetween(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
        array.push(i);
    }
    return sum;
}

function findNum(num) {
    let array = [];
    for (let i = 1; i <= num; i++) {
        array.push(i);
    }
    return array;
}

let array = findNum(10);
console.log(array.join(" + ") + " = " + sumAllBetween(10));


// professor part
function displayMessage(message) {
    console.log("Starting message....");
    console.log(message);
    console.log("Ending message....");
}
let message = "Hello World";
displayMessage(message);


//test objects
let person = {
    name: "John",
    age: 30
};

console.log(person.name);
console.log(person.age);