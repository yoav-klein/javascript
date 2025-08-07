

/** CONVERT TO ARROW FUNCTION */

function add(a, b) {
    return a + b;
}

// let's convert this to an arrow function

const addArrow1 = (a, b) => { return  a + b; }
// or
const addArrow2 = (a, b) => a + b;


console.log(addArrow1(1, 4));
console.log(addArrow2(1, 4));

/** SQUARE ARRAY */
// use an arrow function with map to square each element in the array

const numbers = [1, 2, 3, 4];
console.log(numbers.map((n) => n * n));

/** CLOSURES */

/** 
 * MAKE COUNTER 
 * 
 * create a makeCounter function that returns a function that increments a counter on each call
 * 
 * NOTE: you shouldn't be able to access the counter variable from outside the function
*/

function makeCounter() {
    let counter = 0;
    
    return function() {
        return counter++;
    }
}

const myCounter = makeCounter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());


/** 
 * ONCE 
 * 
 * create a function once(fn) that returns the function fn that can only be called once
 * */

function once(fn) {
    wasCalled = false;

    return function() {
        if(wasCalled) { return; }
        else {
            fn();
            wasCalled = true;
        }
    }
}

const theFunc = once(() => console.log("Hi"));
theFunc();
theFunc();
theFunc();

setTimeout(() => console.log("Hi"), 1000);

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}