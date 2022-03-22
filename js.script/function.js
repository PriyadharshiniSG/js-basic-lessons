/* eslint-disable */
// const doc = doctorize('Priyadharshini');
// console.log(doc);
// function doctorize (firstName) {
//     return `Dr. ${firstName}`
// }

// Anonymous Function
// function (firstName) {   // function without and with parameter
//     return `Dr. ${firstName}`;
// }

// Function Expression
const doctorize = function (firstName) {
    return `Dr. ${firstName}`;
}
const doc = doctorize('Priyadharshini');
console.log(doc);

// Arrow Functions or lambda function
const inchToCM = inches => {
    console.log(inches);
    return inches * 2.54;
};
const resultcm = inchToCM(10);
console.log(resultcm);

const functA = () => {
    console.log(`Hi`);
};
functA();

const add = (a, b = 3) => a + b;  // implicit return
const inToCM = (inches) => inches * 2.54;

console.log(add(100));
console.log(inToCM(25));
// returns an Object
const makeAPerson = (first, last) => ({ name: `${first} ${last}`, age:0});
const person = makeAPerson('Priya', 'dharshini');
console.log(person);

// Self calling **IIFE: Immediately Invoked Function Expression**
(function(age) {
    console.log(`You are cool and your age is $(age)`);
}) (10);


const employee = {
    name: 'Priya dharshini',
    // method
    sayHi: function() {
        console.log(`Hi!!! ${this.name}`);
        return `Hi $(this.name)`; 
    },
    // Arrow function
    print: () => {
        console.log('Hello employee');
    },
    // Short hand Method
    yellHi () {
        console.log(`Hi ${this.name.toUpperCase()}`);
    }
};
employee.sayHi();
employee.print();
employee.yellHi();