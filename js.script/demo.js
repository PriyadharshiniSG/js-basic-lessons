/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-var */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
function addition () {
    const x = 100;
    const y = 50;
    // console.log(x + y);
    // document.writeln(x + y);
    var resultelement = document.getElementById("result");
    resultelement.innerText = (x + y);
}
function sum () {
    const x = parseInt(document.getElementById("firstvalue").value);
    const y = parseInt(document.getElementById("secondvalue").value);
    var resultelement = document.getElementById("result");
    resultelement.innerText = x + y;
}
function add (x, y) {
    var resultelement = document.getElementById("result");
    resultelement.innerText = parseInt(x) + parseInt(y);
}
function problem1 () {
    let i = 0;
    for (i = 0; i < 100; i++) {
        console.log(i);
    }
}
function problem2 () {
    let i = 0;
    for (i = 10; i > 0; i--) {
        console.log(i);
    }
}
function problem3 () {
    let i = 0;
    for (i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
        console.log(i);
        }
    }
}
function printdigits () {
    // let x = 945632672;
    let x = parseInt(document.getElementById('digits').value);
    let num = x;
    let reminder = 0;
    while (num > 0) {
        reminder = parseInt(num % 10);
        if (reminder % 2 != 0) {
        console.log(reminder);
        }
        num = parseInt(num / 10);
     }
}
