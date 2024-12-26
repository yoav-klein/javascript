
class Task {
    id;
    description;
    
    generateUniqueId(prefix = "id") {
        const timestamp = Date.now(); // Current timestamp in milliseconds
        const randomNumber = Math.floor(Math.random() * 1000000); // Random number
        return `${prefix}-${timestamp}-${randomNumber}`;
    }

    constructor(description) {
        this.description = description;
        this.id = this.generateUniqueId();
    }
}


/* GLOBALS */

const insertBtn = document.querySelector("#insert");
const newItemBtn = document.querySelector("#newItemBtn");
const taskListEl = document.querySelector("#taskList");
const filterEl = document.querySelector(".filter");
const dialogEl = document.querySelector("dialog");

const allTasksArray = [];

/** EVENT HANDLERS */

newItemBtn.addEventListener('click', () => {
    dialogEl.showModal();
})

function renderTaskListGate() {
    let taskArrayToRender;
    if(filterEl.value) {
        taskArrayToRender = filterListByText(allTasksArray);
    } else {
        taskArrayToRender = allTasksArray;
    }

    renderTaskList(taskArrayToRender);
}

function renderTaskList(taskArray) {
    taskListEl.innerHTML = '';

    for(const task of taskArray) {
        const taskEl = document.createElement("li");
    
        const labelEl = document.createElement("label");
        labelEl.textContent = task.description;
        labelEl.setAttribute('for', task.id);
    
        const markCompleteCheckbox = document.createElement("input");
        markCompleteCheckbox.type = "checkbox";
        markCompleteCheckbox.id = task.id;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute("class", "delete");
        deleteBtn.textContent = 'X';
        
        taskEl.appendChild(markCompleteCheckbox);
        taskEl.appendChild(labelEl);
        taskEl.appendChild(deleteBtn);
    
        deleteBtn.addEventListener('click', () => {
            const index = allTasksArray.findIndex(t => t.id === task.id);
            allTasksArray.splice(index, 1);
            renderTaskListGate();
        });
        
        taskListEl.appendChild(taskEl);
    }
}

insertBtn.addEventListener('click', (e) => {
    const taskInput = document.querySelector("#newTaskText");
    const newTask = new Task(taskInput.value);
    allTasksArray.push(newTask);
    taskInput.value = '';

    dialogEl.close();
    renderTaskListGate();
})

function filterListByText(taskArray) {
    const currentValue = filterEl.value;
    const foundTasks = [];
    
    for(const task of taskArray) {
        if(task.description.toLowerCase().includes(currentValue.toLowerCase())) {
            foundTasks.push(task);
        }
    }

    return foundTasks;
}

filterEl.addEventListener('keyup', renderTaskListGate);
