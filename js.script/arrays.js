/* eslint-disable */
const names = ['john', 'Sam', 'Peter'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);

// methods of Array
names.push('Suresh');
console.log('After push: ' + names);

const names2 = [...names, 'Raj'];
console.log('names2: ' + names2);

// unshift
names.unshift('poppy');
console.log('unshift:' + names);

const names3 = ['Raj', ...names];
console.log(names3);

// slice()

const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const b1 = [...bikes.slice(0, 2)];
console.log('b1: ' + b1);

const b2 = [...bikes.slice(2)];
console.log(b2);

const newBikes = [...bikes.slice(0,2),
                    'RE', ...bikes.slice(2)
                ];
console.log('newBikes: ' + newBikes);


const newBikes2 = [...newBikes.slice(0,3),
     ...newBikes.slice(4)
];
console.log('newBikes2: ' + newBikes2);

const indexOfSam = names.findIndex(names => names === 'Sam');
console.log('IndexOfSAM: ' + indexOfSam);

function deleteName(name) {
    const find = names.findIndex(names => names === name);
    const newarr = [...names.slice(0,find) , ...names.slice(find + 1) ];
    console.log(newarr)              
}
deleteName('Sam');


// splice
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.splice(3, 2);
// console.log(numbers);
const pizzaSlice = numbers.slice(2,4);
console.log('pizzaSlices: ' + pizzaSlice);
console.log('Original Numbers: ' + numbers);

const numrev = [...numbers].reverse();
console.log(numrev);
console.log(numbers);

// numbers.reverse();
// console.log(numbers);