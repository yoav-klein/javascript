
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
            renderTaskList(allTasksArray);
            filterEl.value = '';
        });
        
        taskListEl.appendChild(taskEl);
    }
}

insertBtn.addEventListener('click', (e) => {
    const taskInput = document.querySelector("#newTaskText");
    const newTask = new Task(taskInput.value);
    allTasksArray.push(newTask);
    taskInput.value = '';
    renderTaskList(allTasksArray);

    dialogEl.close();
})

filterEl.addEventListener('keyup', (e) => {
    console.log("KEYDOWN");
    const currentValue = filterEl.value;
    const foundTasks = [];

    if(currentValue === '') {
        renderTaskList(allTasksArray);
    }
    
    for(const task of allTasksArray) {
        console.log(`${task.description}.includes(${currentValue}): ${task.description.toLowerCase().includes(currentValue.toLowerCase())}`)
        if(task.description.toLowerCase().includes(currentValue.toLowerCase())) {
            foundTasks.push(task);
        }
    }

    renderTaskList(foundTasks);
})

renderTaskList(allTasksArray);