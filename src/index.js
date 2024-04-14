import './style.css';
import newProject from '../src/project.js';

let projectList = [];

let today = new newProject("Today");
today.addToList("Go shopping");
today.addToList("Meet friends for lunch");
projectList.push(today);

console.log(projectList);