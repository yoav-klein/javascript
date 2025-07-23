
/** variables and types */

/** DECLARATION, INIALIZATION, AND SCOPES */

// declaring variables - can be with let, var and const. var is not recommended
// prefer let anywhere

// global scope
var suzuki = "Suzuki";

// also global scope
let toyota = "Toyota";

{
    let honda = "Honda"; // block-scoped, unavailable out of block;
    var kia = "Kia"; // var can't be block-scoped

    console.log(honda);
    console.log(kia);
}

// console.log(honda) // ERROR - honda is not available outside the block
console.log(kia) // no error

foo()

function foo() {
    console.log(cow) // due to hoisting, will not be an error. will print undefined since initialization is not hoisted, only declaration
    // console.log(dog) // ERROR - let doesn't do hoisting
    var cow = "Cow"
    let dog = "Dog"

    console.log(cow)
    console.log(dog)
}

/** DATA TYPES */

let answer = 42; 
// since javascript is weakly-typed, you can assign a value of a different type to the same variable
answer = "The answer is 42";

// + sign with string and integer
let y = "The answer is " + 42; // the number is converted to string
console.log(y);
// but with other operators, the opposite happens:
y = "37" - 7;
console.log(y);
y = "4" * 4;
console.log(y);

// converting strings to numbers
let num = "101";
console.log(parseInt(num, 10)); // 10 is the radix, the base
console.log(parseInt(num, 2)); // 10 is the radix, the base


/** LITERALS */

// array literals
let animals = ["cat", "dog", "lion"]; // length is 3
console.log(animals);

// adding an extra comma leaves an empty slot in the array:
animals = ["cat", "dog", , "lion"]; // the length here is 4
console.log(animals); 

// boolean lierals;
let isBig;
isBig = false;
isBig = true;

// numberic literals

// integers can be base 10, 8, 2, 16
let myNumber = 50; // decimal
myNumber = 0o30; // octal; 0o initial means octal; this is 24
console.log(myNumber);
myNumber = 0xff; // 255 in hexa
console.log(myNumber);
myNumber = 0b111; // 7 in binary
console.log(myNumber);

// BigInt
myNumber = 500n; // the suffix n makes it a BigInt

// object literals

let car = {
    make: "Honda",
    year: 1990
};
console.log(car);

// string literals
let myName = 'Yoav';
// or
myName = "Yoav";





