
// CREATING OBJECTS

// object initializer

const o = {
  prop: "Value",
  "property": "Value",
  1: "value",
  [1+1]: "vvv" // computed keys need to be in square brackets
}

console.log(o);

// idential object literals create different objects
const o1 = {
  prop: "Value",
  "property": "Value",
  1: "value",
  [1+1]: "vvv" // computed keys need to be in square brackets
}

console.log(o == o1); // false
console.log(o === o1); // false

// using a constructor function

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Eagle", "Talon TSi", 1993);
console.log(typeof(myCar)); // object
console.log(myCar);

// using Object.create

const Animal = {
  type: "Invertebrates", // Default value of properties
  displayType() {
    // Method which will display type of Animal
    console.log(this.type);
  },
};

// Create new animal type called `animal`
const animal = Object.create(Animal);
animal.displayType(); // Logs: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes


// INHERITANCE

// add a property to all instances using the prototype of the construtor:
Car.prototype.color = "Red";
const myToyota = new Car("Toyota", "Camry", 2025);
console.log(myToyota); // object

// METHODS
// objectName.methodName = functionName;

const myObj = {
  myMethod: function (params) {
    // do something
  },

  // this works too!
  myOtherMethod(params) {
    // do something else
  },
};

// methods are usually defined using the prototype object of the constructor

Car.prototype.displayCar = function () {
  const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  console.log(result);
};

myToyota.displayCar();

// SPREAD SYNTAX

const me = {
  name: "Yoav",
  age: 39,
  profession: "Jobless"
};

const myClone = {...me};
console.log(myClone);