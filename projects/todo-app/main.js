
const taskInput = document.querySelector("#newTaskText");
const insertBtn = document.querySelector("#insert");
const newItemBtn = document.querySelector("#newItemBtn");
const dialog = document.querySelector("dialog");

const taskList = document.querySelector("#taskList");

function generateUniqueId(prefix = "id") {
    const timestamp = Date.now(); // Current timestamp in milliseconds
    const randomNumber = Math.floor(Math.random() * 1000000); // Random number
    return `${prefix}-${timestamp}-${randomNumber}`;
  }

newItemBtn.addEventListener('click', () => {
    dialog.showModal();
})

insertBtn.addEventListener('click', (e) => {

    const task = document.createElement("li");
    task.setAttribute("class", "task");

    const taskID = generateUniqueId();

    const label = document.createElement("label");
    label.textContent = taskInput.value;
    label.setAttribute('for', taskID);

    const markCompleteChk = document.createElement("input");
    markCompleteChk.type = "checkbox";
    markCompleteChk.id = taskID;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.textContent = 'X';

    task.appendChild(markCompleteChk);
    task.appendChild(label);
    task.appendChild(deleteBtn);

    taskList.appendChild(task);

    task.addEventListener('click', event => {
        if(event.target === deleteBtn) {
            task.remove();
        }
    });

    dialog.close();
})
