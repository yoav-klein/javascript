
const input = document.querySelector("#search");
const options = document.querySelector("#options");

let productList = [];
let productNames = [];

const url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

const promise = fetch(url);
promise.then(response => response.json()).then(data => { 
    productList = data;
    for(const product of productList) {
        productNames.push(product.name);
    }
});

input.addEventListener('keyup', () => {
    options.textContent = '';
    let currOptions = [];
    const currentValue = input.value;
    
    for(const productName of productNames) {
        if(productName.startsWith(currentValue)) {
            currOptions.push(productName);
        }
    }

    let optionsStr = '';
    for(const option of currOptions) {
        optionsStr += '\n';
        optionsStr += option;
    }
    console.log(optionsStr);
    options.textContent += optionsStr;
})

