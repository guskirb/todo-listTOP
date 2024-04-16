import '../src/style.css';
import newProject from '../src/project.js';
import project from '../src/project.js';

const sidebar = document.getElementById("projectList");
const projectInputWindow = document.getElementById("addProjectPopup");
const projectInput = document.getElementById("projectInput");
const addButton = document.getElementById("submit");
const popupCloseButton = document.getElementById("popupClose");
const showInputButton = document.getElementById("addProject");
const projectTitle = document.getElementById("projectTitle");
const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDesc");
const deadline = document.getElementById("deadline");
const priority = document.getElementById("urgency");
const submitButton = document.getElementById("submitList");
const editTaskName = document.getElementById("editTaskName");
const editTaskDesc = document.getElementById("editTaskDesc");
const editDeadline = document.getElementById("editDeadline");
const editPriority = document.getElementById("editUrgency");
const editPopup = document.getElementById("editList");
const closeEditButton = document.getElementById("closeEdit")
const editLower = document.getElementById("editLower");
const addListPopup = document.getElementById("details");
const addListButton = document.getElementById("addList");
const closeAddButton = document.getElementById("closeDetails");
const searchBar = document.getElementById("listSearch");

const listMain = document.getElementById("list");

let projectList = [];

let currentProject;

let today = new newProject("Today");
let thisWeek = new newProject("This Week");
thisWeek.addToList("Work Meeting", "high", "Bring draft proposal", "2024-04-30")
today.addToList("Go shopping", "low", "Buy apples");
today.addToList("Meet friends for lunch", "low", "Call her 10 minutes before");
projectList.push(today);
projectList.push(thisWeek);

searchBar.addEventListener("input", e => {
    clearList();
    const value = e.target.value.toLowerCase();
    console.log(currentProject);
    for (let x = 0; x < currentProject.toDoList.length; x++) {
        if (currentProject.toDoList[x].item.toLowerCase().includes(value)) {
            renderList(currentProject, x);
        } else {

        }
    }
})

closeEditButton.addEventListener("click", () => {
    editPopup.style.display = "none";
    addListPopup.style.gridRow = "2 / 4";
})

closeAddButton.addEventListener("click", () => {
    addListPopup.style.display = "none";
})

addListButton.addEventListener("click", () => {
    if (addListPopup.style.display === "flex") {
        addListPopup.style.display = "none";
    } else {
        addListPopup.style.display = "flex";
    }
})

function newListButton() {
    if (currentProject === undefined) {
        return alert("Please Select a List");
    } if (taskName.value === "") {
        alert("Please Enter a Task Name")
    } else {
        currentProject.addToList(taskName.value, priority.value, taskDesc.value, deadline.value);
        refreshList(currentProject);
    }
}

submitButton.addEventListener("click", newListButton);

// add project popup window
showInputButton.addEventListener("click", () => {
    if (projectInputWindow.style.display === "flex") {
        projectInputWindow.style.display = "none";
    } else {
        projectInputWindow.style.display = "flex";
    }
})

popupCloseButton.addEventListener("click", () => {
    projectInputWindow.style.display = "none";
})

// add a new project to list
addButton.addEventListener("click", () => {
    if (projectInput.value === "") {
        return;
    } else {
        projectList.push(new newProject(projectInput.value));
        projectButtons();
        projectInput.value = "";
    }
})

//remove all project buttons
function projectButtons() {
    clearButtons();
    for (let x = 0; x < projectList.length; x++) {
        newProjectButton(x);
    }
}

//add a new project button
function newProjectButton(value) {
    let newDiv = document.createElement("div");
    let newButton = document.createElement("button");
    let deleteButton = document.createElement("img");
    sidebar.appendChild(newDiv);
    newDiv.appendChild(newButton).textContent = projectList[value].projectName;
    newDiv.appendChild(deleteButton);
    deleteButton.classList.add("projectDelete")
    projectEventListeners(newDiv, value);
}

function projectEventListeners(element, value) {
    element.firstChild.addEventListener("click", () => {
        refreshList(projectList[value]);
        currentProject = projectList[value];
    });
    element.lastChild.addEventListener("click", () => {
        deleteProject(value)
    });
}

function deleteProject(value) {
    projectList.splice(value, 1);
    projectButtons();
}

function refreshList(project) {
    clearList();
    for (let x = 0; x < project.toDoList.length; x++) {
        renderList(project, x);
    }
}

function renderList(project, value) {
    let newDiv = document.createElement("div");
    let deleteButton = document.createElement("img");
    let editButton = document.createElement("img");
    let checkBox = document.createElement("input")
    checkBox.type = "checkbox";

    projectTitle.textContent = project.name;
    listMain.appendChild(newDiv);
    listMain.lastChild.classList.add(value);
    newDiv.appendChild(checkBox);
    newDiv.appendChild(document.createElement("li")).textContent = project.toDoList[value].name;
    newDiv.appendChild(document.createElement("li")).textContent = project.toDoList[value].date;
    newDiv.lastChild.classList.add("date");
    newDiv.appendChild(document.createElement("div"))
    newDiv.lastChild.classList.add(project.toDoList[value].urgency);
    newDiv.appendChild(editButton);
    editButton.classList.add("edit");
    editButton.addEventListener("click", () => {
        editEventListener(project, value);
    })
    newDiv.appendChild(deleteButton);
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => {
        deleteEventListener(listMain, newDiv, project, value);
    })
}

function editEventListener(project, value) {
    editLower.removeChild(editLower.lastChild);
    editLower.appendChild(document.createElement("button")).textContent = "Submit";
    editPopup.style.display = "flex";
    editPopup.style.gridRow = "2 / 3";
    editPopup.style.gridColumn = "3 / 4";
    addListPopup.style.gridRow = "3 / 4";
    editTaskName.value = project.toDoList[value].name;
    editTaskDesc.value = project.toDoList[value].note;
    editDeadline.value = project.toDoList[value].date;
    editPriority.value = project.toDoList[value].urgency;
    editLower.lastChild.addEventListener('click', () => {
        editButtonListener(project, value)
    });
}

function editButtonListener(project, value) {
    project.toDoList[value].name = editTaskName.value;
    project.toDoList[value].note = editTaskDesc.value;
    project.toDoList[value].date = editDeadline.value;
    project.toDoList[value].urgency = editPriority.value;
    editPopup.style.display = "none";
    addListPopup.style.gridRow = "2 / 4";
    refreshList(currentProject);
}

function deleteEventListener(element, element2, project, value) {
    element.removeChild(element2);
    project.toDoList.splice(value, 1);
    refreshList(project);
}

function clearList() {
    while (listMain.firstChild) {
        listMain.removeChild(listMain.lastChild);
    }
}

function clearButtons() {
    while (sidebar.firstChild) {
        sidebar.removeChild(sidebar.lastChild);
    }
}

projectButtons();
console.log(projectList);