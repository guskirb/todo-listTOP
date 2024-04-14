import newProject from '../src/project.js';

let newList

export default newList = class List {
    constructor(name, urgency, note, date) {
        this.name = name;
        this.urgency = urgency;
        this.note = note;
        this.date = date;
    }
    get name() {
        return this.item;
    }
    set name(newName) {
        this.item = newName;
    }
}