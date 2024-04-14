import newList from "../src/list.js";

let newProject

export default newProject = class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.toDoList = [];
    }
    get name() {
        return this.projectName;
    }
    set name(newName) {
        this.projectName = newName;
    }
    addToList(name, urgency, note, date, complete) {
        let addList = new newList(name, urgency, note, date, complete);
        this.toDoList.push(addList);
    }
};

