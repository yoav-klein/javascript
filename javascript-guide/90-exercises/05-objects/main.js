
/** CREATE AN OBJECT */

const myToyota = {
    make: "Toyota",
    year: 2025,
    model: "Corolla"
}

// using a constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const myHonda = new Car("Honda", "Accord", 2025);
console.log(myHonda);

// accessing properties - dot notation or bracket notation
console.log(myHonda.year);
console.log(myHonda['year']);

// ENUMERATE PROPERTIES
for(const p in myToyota) {
    console.log(`${p}: ${myToyota[p]}`);
}

for(const key of Object.keys(myToyota)) {
    console.log(`${key}: ${myToyota[key]}`);
}

// DELETE PROPERTEIS
delete myHonda.year;
console.log(myHonda);

/** PROTOTYPES */

function Person(name) {
    this.name = name;
}

Person.prototype.citizenship = "Israeli";

const yoav = new Person("Yoav");
console.log(yoav);
console.log(yoav.citizenship);

/** METHODS */

const dikla = {
    name: "Dikla",
    sayHi: function() { console.log(`Hi, I am ${this.name}`) },
    // this works too
    sayHelloTo(name) { console.log(`Hi ${name}, I am ${this.name}`)}
}

dikla.sayHi();
dikla.sayHelloTo("Tamar");

// methods are usually defined on the prototype
Person.prototype.sayHi = function() { console.log(`Hi, I am ${this.name}`) };

const tamar = new Person("Tamar");
tamar.sayHi();

// getters and setters

const myObj = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(myObj.a); // 7
console.log(myObj.b); // 8, returned from the get b() method
myObj.c = 50; // Calls the set c(x) method
console.log(myObj.a); // 25
