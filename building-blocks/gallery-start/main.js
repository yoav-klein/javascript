const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

let currentImage = 'pic1.jpg';

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageList = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alternatives = ['Eyeball', 'Texture', 'Flowers', 'Ancient egyptians', 'Butterfly'];

/* Looping through images */

for(let i = 0; i < imageList.length; ++i) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageList[i]}`);
    newImage.setAttribute('alt', alternatives[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', (e) => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', e => {
    const current = btn.getAttribute('class');

    if(current === "dark") {
        btn.setAttribute('class', "light");
        btn.textContent = 'Lighten'
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)"
    } else if(current === "light") {
        btn.setAttribute('class', "dark");
        btn.textContent = 'Darken'
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)"
    }
})