// Задание 7.7.1

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}
const person1 = {
    name: `John`,
    age: 30
}
printInfo.call(person1);


// Задание 7.7.2

function calculate(a, b, operator) {
    if (operator === `+`) {
        return a + b;
    } else if (operator === `-`) {
        return a - b;
    } else if (operator === `*`) {
        return a * b;
    } else if (operator === `/`) {
        return a / b;
    }
    return 0;
}
const obj = {
    a: 2,
    b: 3,
    operator: `+`
};
calculate.apply(obj, [2, 3, `+`]);


// Задание 7.7.3

const users = [
    {name: `John`, age: 30},
    {name: `Lily`, age: 16},
    {name: `Harry`, age: 19},
];
const userAge18 = users.filter(user => user.age >= 18);
const userName18 = userAge18.map(user => user.name);


// Задание 7.7.4

function setFullName(fullName) {
    this.fullName = fullName;
}
const person2 = {
    firstName: `John`,
    lastName: `Walk`
};
const setPersonFullName = setFullName.bind(person2);
setPersonFullName(`John Smith`);
console.log(person2.fullName);


// Задание 7.7.5

function allNumbers(array) {
    const arrayUniqueNumbers = [];
    for (let i = 0; i < array.length; i++) {
        arrayUniqueNumbers.push(array[i]);
    }
    arrayUniqueNumbers.sort((a, b) => a - b);
    const uniqueNumbers = arrayUniqueNumbers.filter((item, index) => {
        return index === 0 || item !== arrayUniqueNumbers[index - 1];
    });
    return uniqueNumbers;
}