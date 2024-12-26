
class Task {
    id;
    description;
    state;
    
    generateUniqueId(prefix = "id") {
        const timestamp = Date.now(); // Current timestamp in milliseconds
        const randomNumber = Math.floor(Math.random() * 1000000); // Random number
        return `${prefix}-${timestamp}-${randomNumber}`;
    }

    constructor(description) {
        this.description = description;
        this.id = this.generateUniqueId();
        this.state = "pending";
    }
}


/* GLOBALS */

const insertBtn = document.querySelector("#insert");
const newItemBtn = document.querySelector("#newItemBtn");
const taskListEl = document.querySelector("#taskList");
const filterEl = document.querySelector(".filter");
const stateSelectEl = document.querySelector("#state_selector");
const dialogEl = document.querySelector("dialog");

const allTasksArray = [];

/** EVENT HANDLERS */

newItemBtn.addEventListener('click', () => {
    dialogEl.showModal();
})


insertBtn.addEventListener('click', (e) => {
    const taskInput = document.querySelector("#newTaskText");
    const newTask = new Task(taskInput.value);
    allTasksArray.push(newTask);
    taskInput.value = '';

    dialogEl.close();
    renderTaskListGate();
})

stateSelectEl.addEventListener('change', renderTaskListGate);

function renderTaskListGate() {
    let taskArrayToRender = allTasksArray;
    
    taskArrayToRender = filterListByState(taskArrayToRender, stateSelectEl.value);

    if(filterEl.value) {
        taskArrayToRender = filterListByText(taskArrayToRender);
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
        if(task.state === 'done') {
            markCompleteCheckbox.checked = true;
        }
        
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

        markCompleteCheckbox.addEventListener('click', () => {
            if(markCompleteCheckbox.checked) {
                task.state = "done";
            } else {
                task.state = "pending";
            }
        })
        
        taskListEl.appendChild(taskEl);
    }
}


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

function filterListByState(taskArray, state) {
    if(stateSelectEl.value === 'all') {
        return taskArray
    } else {
        const foundTasks = [];
        for(const task of taskArray) {
            console.log(`task: ${task}`)
            if(task.state === state) {
                foundTasks.push(task);
            }
        }
        return foundTasks;
    }
}

filterEl.addEventListener('keyup', renderTaskListGate);
