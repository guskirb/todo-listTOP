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

const listMain = document.getElementById("list");

let projectList = [];

let today = new newProject("Today");
let thisWeek = new newProject("This Week");
thisWeek.addToList("Work Meeting")
today.addToList("Go shopping", false, "Buy apples", "24,07,2024");
today.addToList("Meet friends for lunch");
projectList.push(today);
projectList.push(thisWeek);

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
    let deleteButton = document.createElement("button");
    sidebar.appendChild(newDiv);
    newDiv.appendChild(newButton).textContent = projectList[value].projectName;
    newDiv.appendChild(deleteButton).textContent = "x";
    newDiv.firstChild.addEventListener("click", () => {
        refreshList(projectList[value]);
    });
    newDiv.lastChild.addEventListener("click", () => {
        deleteProject(value)
    });
}

function deleteProject(value) {
    projectList.splice(value, 1);
    projectButtons();
}

function refreshList(project) {
    clearList();
    projectTitle.textContent = project.name;
    for (let x = 0; x < project.toDoList.length; x++) {
        let newDiv = document.createElement("div");
        let deleteButton = document.createElement("button");
        let checkBox = document.createElement("input")
        checkBox.type = "checkbox";

        listMain.appendChild(newDiv);
        listMain.lastChild.classList.add(x);
        newDiv.appendChild(checkBox);
        newDiv.appendChild(document.createElement("li")).textContent = project.toDoList[x].name;
        newDiv.appendChild(document.createElement("li")).textContent = project.toDoList[x].date;
        newDiv.appendChild(deleteButton).textContent = "x";

        deleteButton.addEventListener("click", () => {
            listMain.removeChild(newDiv);
            project.toDoList.splice(x, 1);
            refreshList(project);
        });
    }
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