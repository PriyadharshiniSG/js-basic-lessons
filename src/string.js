/* eslint-disable camelcase */
/* eslint-disable no-useless-escape */
/* eslint-disable quotes */
/* eslint-disable semi */
// 3 ways to create strings variables
// 1. using single quotes;
// 2. double quotes;
// 3. back ticks;

// eslint-disable-next-line camelcase
const my_name = 'NamefieldEmpty';
const middle = 'Gabbbar';
const last = 'Singn';

console.log(my_name);
console.log(middle);
console.log(last);

// const sentence1 = 'she\'s so cool';
const sentence1 = 'she\'s so "cool"';
console.log(sentence1);
const sentence2 = "she's so cool";
console.log(sentence2);

const sentence3 = `'she\'s so cool'`;
console.log(sentence3);
const sentence4 = "she\'s so \"cool\"";
console.log(sentence4);

const song1 = `I like 
    ARR songs and 
    Aniruth songs`;
console.log(song1);

const hello3 = 'hello my name is' + my_name + ". Nice to meet you";
console.log(hello3);

const hello4 = `hello my name is ${my_name}. Nice to meet you.${1 + 100} years old `;
console.log(hello4);

const html = `<div>
                <h2>${my_name}</h2>
                <p>${hello3}</p>
                </div>
                `;
console.log(html);
// document.body.innerHTML = html;
