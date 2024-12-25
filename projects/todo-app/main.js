
const taskInput = document.querySelector("#newTaskText");
const insertBtn = document.querySelector("#insert");
const newItemBtn = document.querySelector("#newItemBtn");
const dialog = document.querySelector("dialog");

const taskList = document.querySelector("#taskList");

newItemBtn.addEventListener('click', () => {
    dialog.showModal();
})

insertBtn.addEventListener('click', (e) => {

    const listItem = document.createElement("li");
    listItem.setAttribute("class", "listItem");

    const text = document.createElement("span");
    text.textContent = taskInput.value;

    const markCompleteLabel = document.createElement("label");

    const markCompleteInput = document.createElement("input");
    markCompleteInput.type = "checkbox";
    markCompleteInput.setAttribute("class", "box");

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.textContent = '╳';

    markCompleteLabel.appendChild(markCompleteInput);
    markCompleteLabel.appendChild(text);
    markCompleteLabel.appendChild(deleteBtn);


    listItem.appendChild(markCompleteLabel);

    markCompleteInput.addEventListener('click', (e) => {
        if(e.target.checked) {
            text.classList.add('markChecked');
        } else {
            text.classList.remove('markChecked');
        }
    })

    taskList.appendChild(listItem);

    dialog.close();
})
