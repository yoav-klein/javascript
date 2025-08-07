

/** Fetch API */

const pEl = document.getElementById("paragraph");

const promise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

// chaining promises - reponse.json() also returns a promise
promise
  .then((response) => response.json())
  .then((data) => pEl.textContent = data[0].name);


/**
 
// when you include the JavaScript code as a module, you can use top-level await.

 const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
 const data = await response.json();
 pEl.textContent = data[0].name;
 
 */

/** Creating a Promise */

// wrapping setTimeout in a promise

function doSomething(res) {
  return new Promise((resolveFunc, rejectFunc) => {
    if(res === "fail") {
      rejectFunc("ohhh");
    }
    setTimeout(() => {
      resolveFunc("resolved value");
    }, 1000);
  });
}

doSomething("fail")
  .then((val) => { console.log("Succeeded!"); console.log(val) })
  .catch((e) => { console.log("Failed!"); console.log(e) });

doSomething("succeed")
  .then((val) => { console.log("Succeeded!"); console.log(val) })
  .catch((e) => { console.log("Failed!"); console.log(e) });
