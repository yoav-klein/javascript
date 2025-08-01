// ASSIGNMENT OPERATOR

let x = 4; // easy right?

let person = {};
person.name = "Yoav"; // you can assign to properties when you deal with objects

x.name = "Yoav"; // you can't assign to properties when you deal with primitives. this throws in strict mode

// LOGICAL OPERTATORS

let someBool = true && true; // true
console.log(someBool);

someBool  = true && false; // false;
console.log(someBool);

someBool = true || false; // true;
console.log(someBool);

let varWithoutVal; // is 'undefined'
let varWithVal = "Hello";
let y = varWithoutVal ?? varWithVal;
console.log(y); // prints 'Hello'

// UNARY OPERATORS

// delete
person.age = 39;
person.lastName = "Klein";
console.log(person);

delete person.name;
console.log(person);

// typeof
const myFun = () => 5 + 2;
const shape = "round";
const size = 1;
const foo = ["Apple", "Mango", "Orange"];
const today = new Date();

console.log(typeof myFun);
console.log(typeof shape);
console.log(typeof size);
console.log(typeof foo);
console.log(typeof today);
console.log(typeof doesntexist);

// BASIC EXPRESSIONS

// this keyword

const person1 = {
  name: 'Yoav',
  lastName: 'Klein',
  sayHello: function() { console.log("Hello, I am " + this.name + " " + this.lastName); }
}

person1.sayHello();

// optional chaining

const firstName = person1?.name; // will be 'Yoav'
console.log(firstName);

const lastName = person1?.sureName; // will be undefined
console.log(lastName);