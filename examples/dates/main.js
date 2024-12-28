
const date = document.querySelector("#duedate");
const button = document.querySelector("#button");

button.addEventListener('click', () => {
    const dateVal = date.value;
    console.log(dateVal);

    const dateObj = new Date(dateVal);
    console.log(dateObj);

    // compare dates
    const now = new Date()
    // in millisecond
    const diff = dateObj - now;
    console.log(diff);

    // in days
    console.log(diff / (1000 * 60 * 60 * 24));

    // in hours
    console.log(diff / (1000 * 60 * 60));
})