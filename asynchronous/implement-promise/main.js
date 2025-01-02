
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");


function setAlarm(name, delay) {
    console.log("Setting alarm");
    return new Promise((resolve, reject) => {
        if(delay < 0) {
            reject("You can't set a timer for the past, idiot");
        }
        setTimeout(() => {
          resolve(`Wake up, ${name}`);
        }, delay);
    })
}

button.addEventListener("click", () => { 
    setAlarm(name.value, delay.value).then(res => {
        output.textContent = res;
    }).catch(error => {
        output.textContent = `Couldn't set alarm becasue ${error}`;
    });

});