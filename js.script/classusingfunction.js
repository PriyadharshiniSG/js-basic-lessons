/* eslint-disable */
function Car () {
    let milesDriven = 0;
    let speed = 0;

    this.accelerate = (velocity, distance) => {
        speed += velocity;
        milesDriven += distance;
    }
    this.getMilesDriven = () => milesDriven;
    this.getSpeed = () => speed;
}
const testCarModule = new Car();
console.log('Miles: ' + testCarModule.getMilesDriven());
console.log('Speed: ' + testCarModule.getSpeed());

testCarModule.speed = 100;
testCarModule.milesDriven = 10;
console.log('Miles: ' + testCarModule.getMilesDriven());
console.log('Speed: ' + testCarModule.getSpeed());

testCarModule.accelerate(4, 10);
console.log('Miles: ' + testCarModule.getMilesDriven());
console.log('Speed: ' + testCarModule.getSpeed());
