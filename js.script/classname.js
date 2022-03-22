/* eslint-disable */
class Pizza {
    // constructor
    constructor(toppings = [], customer) {
        this.toppings = toppings;
        this.customer = customer;
    }
    // static property
    static extraToppings = ['pepperoni', 'cheese'];
    // static method 
    static sayThankyou() {
        console.log('ThankYou!!!');
    } 
    // instance property
    slices = 10;

    get noOfSlices() {
        return this.slices;
    }
    set noOfSlices(value) {
        // slices = value;
        this.slices = value;
    }
    eat() {
        console.log(this.toppings);
        console.log(this.customer);
    }
    // instance method
    getCokeOrPepsi = () => {
        console.log('Coke');
        console.log('Pepsi');
        console.log(this);
    }
    // Private Fields can only be modified inside a class
    #bankBalance = 10000 ;

    get balance() {
        return this.#bankBalance;
    }
    set balance(value) {
        this.#bankBalance = value;
    }
}

const myLunch = new Pizza(['Onion', 'mushroom', 'capsicum'], 'Priyadharshini');
// console.log(myLunch);
myLunch.eat();
myLunch.toppings = ['Carrot', 'Almonds', 'Lobstar']
console.log(myLunch.toppings);
console.log(Pizza.extraToppings);
Pizza.extraToppings = ['onion', 'Lettuce'];
console.log(Pizza.extraToppings);
Pizza.sayThankyou();
console.log( myLunch.noOfSlices);
myLunch.noOfSlices = 6;
console.log( myLunch.noOfSlices);
myLunch.getCokeOrPepsi();
console.log(myLunch.noOfSlices)
console.log(myLunch.balance);
myLunch.balance = 5000;
console.log(myLunch.balance);
// myLunch.#bankBalance = 2000;
// console.log(myLunch.balance);