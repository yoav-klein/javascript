
const sumbitButton = document.querySelector('#submit-button');
const nameInput = document.querySelector('#username');
const ageInput = document.querySelector('#age');
const list = document.querySelector('ul');

const csrfHeaderName = document.querySelector('meta[name="_csrf_header"]')
const csrfToken = document.querySelector('meta[name="_csrf"]')

function populateList() {
    const promise = fetch("users");
    list.innerHTML = '';
    promise.then(response =>  { 
        if(!response.ok) {
            throw new Error(`request failed: ${response.statusText}`);
        }
        return response.json();
    }).then(data =>  data.forEach(user => {
        const item = document.createElement('li');
        item.innerText = user.name + " " + user.age;
        list.appendChild(item);
    }));
}

sumbitButton.addEventListener('click', () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(csrfHeaderName.content, csrfToken.content);
    const promise = fetch("user", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ name: nameInput.value, age: ageInput.value }),
    });
    
    promise.then(response => populateList());
});


// not found button 

const notFoundText = document.querySelector('#notfoundtext');
document.querySelector('#notfoundbutton').addEventListener('click', () => {
    const promise = fetch("notfound");
    promise.then(response => { 
        if(response.status === 404) {
            notFoundText.textContent = "NOT FOUND";
        }
    });
});


// server error button

const serverErrorText = document.querySelector('#servererrortext');
document.querySelector('#servererrorbutton').addEventListener('click', () => {
    const params = new URLSearchParams();
    params.append("val", "problems");
    const promise = fetch(`servererror?${params}`);
    promise.then(response => {
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    }).catch(e => serverErrorText.textContent = e);
});