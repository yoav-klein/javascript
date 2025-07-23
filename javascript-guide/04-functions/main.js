
/** FUNCTIONS */

function changeNum(number) {
    number = 42;
}

let n = 10;
changeNum(n);
// the argument is passed by value, so the modification is not visible
console.log(n);

// however, objects are passed by reference, so modifications are visible
function changeCar(car) {
    car.maker = "Honda";
}

let car = {
    maker: "Toyota",
    model: "Camry",
    year: 2011
}

changeCar(car)
console.log(car);

// also arrays are passed by reference
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

// function hoisting
// functions are hoisted, so you can call a function that's located below the calling code:
barvaz()

function barvaz() {
    console.log("wakk");
}

// function expressions
// a function may be assigned to a variable.
// in this case, it may be anonymous, or named

const anon = function () {
    console.log("I am anonymous");
}

anon();

// RECURSION

// a function can refer to itself either by the declaraion name, or by the function expression
const foo = function bar(n) {
    if(n > 0) { 
        bar(n - 1);
        foo(n - 1);
    }
    console.log("iteration");
}

foo(3);

// Immediately Invoked Function Expression
(function () {
  console.log("IIFE");
})();

/** SCOPES */

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
    // varialbes in the parent scope are available in child scope
    return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"

/** CLOSURES */

function outter() {
    const a = 1;
    return function() {
        return a;
    }
}

const inner = outter();
console.log(inner());

// conflicts

// when 2 variables of the same name appear in nested scopes, the inner takes precendence
function boo() {
    const a = 1;
    function zoo() {
        const a = 2;
        console.log(a);
    }
    zoo();
}

boo();

/** the arguments object */

function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "

/** default parameters */
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5

/** rest parameters */
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr1 = multiply(2, 1, 2, 3);
console.log(arr1); // [2, 4, 6]

/** ARROW FUNCTIONS */
// arrow functions are shorthand syntax of function expression.

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]