
/** LOOPS */

// for loop
for(let i = 0; i < 5; ++i) {
    console.log(i);
}

// while
let i = 0;
while(i < 10) {
    console.log(i);
    ++i;
}

// for in
const car = {
    maker: "Toyota",
    year: 2015,
    color: "Yellow"
};

for(i in car) {
    console.log(`key: ${i}, val: ${car[i]}`);
}

// for of
const colors = ["yellow", "purple", "black", "white"];
for(color of colors) {
    console.log(color);
}