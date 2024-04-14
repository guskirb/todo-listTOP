import './style.css';
import newProject from '../src/project.js';

const sidebar = document.getElementById("projectList");
const listMain = document.getElementById("list");
const addButton = document.getElementById("submit");
const projectInput = document.getElementById("projectInput");

let projectList = [];

let today = new newProject("Today");
let thisWeek = new newProject("This Week");
thisWeek.addToList("Work Meeting")
today.addToList("Go shopping");
today.addToList("Meet friends for lunch");
projectList.push(today);
projectList.push(thisWeek);

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

function newProjectButton(value) {
    let newButton = document.createElement("button");
    sidebar.appendChild(newButton).textContent = projectList[value].projectName;
    sidebar.lastChild.addEventListener("click", () => {
        refreshList(projectList[value]);
    });
}

function refreshList(project) {
    clearList();
    for (let x = 0; x < project.toDoList.length; x++) {
        listMain.appendChild(document.createElement("li")).textContent = project.toDoList[x].name;
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