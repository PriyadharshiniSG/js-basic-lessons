/* eslint-disable */
const maxvalue = Math.max(10,12,35,60,2,55);
console.log(maxvalue);

const floatValue = parseFloat('2.032565');
console.log(floatValue);

let intValue = parseInt('2356abcd');
console.log(intValue);

intValue = parseInt('abcd2356');
console.log(intValue);

let today = Date.now();
console.log(today);
// returns no. of milliseconds since January 1, 1970
// 00:00:00 UTC

function calculateBill (billAmount, taxRate) {
    console.log(billAmount + '-' + taxRate);
    const total = billAmount + billAmount * taxRate;
    return total;
}
calculateBill(100, 0.13);

let billtotal = calculateBill(20 + 10 + 50, 0.75);
console.log(billtotal);

//default value for parameter
function  yell(name='silly Goose') {
    return `HEY ${name.toUpperCase()}`
}

let greetings= yell('Priya');
console.log(greetings);
greetings =yell();
console.log(greetings);

function calculateBilll (billAmounnt,taxRate = 0.13, tipRate = 0.15){
    console.log('Running calculate Bill')
    console.log('billAmount:' +billAmounnt + 'taxRate' +taxRate,  'tipRate' +tipRate);
    const total = billAmounnt + billAmounnt *taxRate + billAmounnt * tipRate;
    return total;
}
// let calculateBillamount=calculateBill(100);
// console.log(calculateBillamount);

calculateBilll(100);

calculateBilll(100,0.66);

calculateBilll(100,undefined,0.66);