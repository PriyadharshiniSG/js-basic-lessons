/* eslint-disable */
function doSomeTask() {
    const x = 100;
    const y = 20;
    console.log('x: ' + x + ' y: ' + y);
}
doSomeTask();
// console.log('completed');
function outer() {
    const outerVar = 'Hey I am the outer Var!';
    // console.log(outerVar);
    function inner() {
        const innerVar = 'Hey I am the inner Var!';
        console.log(innerVar);
        console.log(outerVar);
    }
    // console.log(innerVar); // undefined innerVar
    // inner(); // call to inner() from outer()
    return inner;
}
// outer();
// inner();
var innerFunc = outer();
innerFunc();
innerFunc= null;

function createGreeting (greeting = '') {
    const myGreet = greeting.toUpperCase();
    return function (name) {
        return `${myGreet} ${name}`;
    }
}
var greet = createGreeting('hi');
console.log(greet('priya'));

const sayHello = createGreeting('hello');
const sayVanakkam = createGreeting('Vanakkam');

console.log(sayHello('Priya'));
console.log(sayVanakkam('dharshini'));
console.log(sayVanakkam('tom&jerry'));

function createGame(gameName) {
    let score = 0;
    return function win() {
      score++;
      return `Your game ${gameName} score is ${score}`;
    }
  }
const sport = createGame("Volley ball");
points = sport('win()');
console.log(points);
// console.log(sport('win'));

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
hockeyGame();
hockeyGame();
hockeyGame();
soccerGame();

console.log(hockeyGame());
console.log(soccerGame());


