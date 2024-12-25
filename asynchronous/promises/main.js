
/* const notify = document.querySelector(".notify");
const responseParagraph = document.querySelector(".response")
const button = document.querySelector("#button");

button.addEventListener('click', () => {
    notify.textContent = '';
    responseParagraph.textContent = '';

    const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

    notify.textContent = 'called fetch';

    fetchPromise.then(response =>  {
        if(!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
    }).then(data => {
        responseParagraph.textContent = data[0].name;
    }).catch(error => {
        alert(error);
    });


}) */

try {
    // using await outside an async function is only allowed in a module
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    alert(data[0].name);
} catch (error) {
  alert(`Could not get products: ${error}`);
  throw error;
}

    