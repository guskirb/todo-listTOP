let newProject

export default newProject = class Project {
    constructor(projectName) {
        this.projectName = projectName;
    }
    get name() {
        return this.projectName;
    }
    set name(newName) {
        this.projectName = newName;
    }
};

