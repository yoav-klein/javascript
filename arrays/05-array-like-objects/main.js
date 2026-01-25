
const listItems = document.querySelector('ul').children // this is an HTMLCollection
console.log(listItems);

// or
// const listItems = document.querySelectorAll('li'); // this is a NodeList
// console.log(listItems);

// both NodeList and HTMLCollection are Array-like objects

Array.from(listItems).forEach(listItem => console.log(listItem.innerText));