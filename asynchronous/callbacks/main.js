
const para = document.querySelector(".para");
const button = document.querySelector("#button");

button.addEventListener('click', () => {
    para.textContent = '';

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () => {
        para.textContent = `${para.textContent} Finished with status ${xhr.status}`;
    });

    xhr.open("GET", 
        "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
    );

    xhr.send();
    para.textContent = `${para.textContent}Started XHR request\n`;


})