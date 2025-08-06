

const pEl = document.getElementById("paragraph");

const promise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
promise.then((response) => response.json())
  .then((data) => pEl.textContent = data[0].name);
pEl.textContent = data[0].name;


/**
 
// when you include the JavaScript code as a module, you can use top-level await.

 const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
 const data = await response.json();
 pEl.textContent = data[0].name;
 
 */