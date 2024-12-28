
class Task {
    id;
    name;
    description;
    state;
    insertDate;
    dueDate;

    
    generateUniqueId(prefix = "id") {
        const timestamp = Date.now();
        const randomNumber = Math.floor(Math.random() * 1000000);
        return `${prefix}-${timestamp}-${randomNumber}`;
    }

    constructor(name, description, dueDate) {
        this.name = name;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.id = this.generateUniqueId();
        this.state = "pending";
        this.insertDate = Date.now();
    }
}


/* GLOBALS */

const insertBtn = document.querySelector("#insert");
const newItemBtn = document.querySelector("#newItemBtn");
const taskListEl = document.querySelector("#taskList");
const filterEl = document.querySelector(".filter");
const stateSelectEl = document.querySelector("#state_selector");
const dialogEl = document.querySelector("dialog");
const popupContainerEl = document.querySelector("#popup-container");

const allTasksArray = [];

/** EVENT HANDLERS */

newItemBtn.addEventListener('click', () => {
    dialogEl.showModal();
})


insertBtn.addEventListener('click', (e) => {
    const taskInputEl = document.querySelector("#newTaskText");
    const taskDescriptionEl = document.querySelector("#newTaskDescription");
    const dueDateEl = document.querySelector("#duedate");
    const newTask = new Task(taskInputEl.value, taskDescriptionEl.value, dueDateEl.value);
    
    allTasksArray.push(newTask);
    
    taskDescriptionEl.value = ''; 
    taskInputEl.value = '';

    dialogEl.close();
    renderTaskListGate();
})

filterEl.addEventListener('keyup', renderTaskListGate);

popupContainerEl.addEventListener('click', e => {
    if(e.target === popupContainerEl) {
        popupContainerEl.style.display = "none";
        document.body.removeClass("modal-active");
    }
})

stateSelectEl.addEventListener('change', renderTaskListGate);

/** FUNCTIONS */

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
        labelEl.setAttribute('for', task.id);
        
        const pEl = document.createElement("p");
        pEl.setAttribute('data-id', task.id);
        pEl.textContent = task.name;
    
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
        taskEl.appendChild(pEl);
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
            renderTaskListGate();
        })
        
        // on click on the label, open a popup
        pEl.addEventListener('click', (e) => {
            e.preventDefault();

            const popupH2El = document.querySelector("#popup-h2");
            const popupDescriptionEl = document.querySelector("#popup-description");
            const popupDueDateEl = document.querySelector("#popup-duedate");

            document.body.classList.add("modal-active");
            popupContainerEl.style.display = "flex";
            const id = e.target.getAttribute("data-id");
            const task = allTasksArray.findIndex(t => t.id === id);
            popupH2El.textContent = allTasksArray[task].name;
            popupDescriptionEl.textContent = allTasksArray[task].description;
            popupDueDateEl.textContent = allTasksArray[task].dueDate.toDateString();

        })
        
        taskListEl.appendChild(taskEl);
    }
}


function filterListByText(taskArray) {
    const currentValue = filterEl.value;
    const foundTasks = [];
    
    for(const task of taskArray) {
        if(task.name.toLowerCase().includes(currentValue.toLowerCase())) {
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


