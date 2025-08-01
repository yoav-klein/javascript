
// unicode
console.log('\u00A9');

console.log('\u{2F804}');

// template literals

// embedded expressions:
// instead of
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);

// using template literals
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);



// multi line strings

// instead of
console.log(
  "string text line 1\n\
string text line 2",
);

// using template literals
console.log(`string text line 1
string text line 2`);
