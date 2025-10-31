
const buttons = document.querySelectorAll(".my");

for(const button of buttons) {
    button.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-item");
        const sign = e.target.textContent;
        const input = document.getElementById(id);
        const currVal = Number(input.value);
        if(sign == '+') {
            input.value = currVal + 1;
        } else if(sign == '-') {
            input.value = currVal - 1;
        }
        
    });
}

// const attributes = e.target.attributes;
// const attributes = paragraph.attributes;
//for(const attr in attributes) {
    //for(const attr in attrs) {