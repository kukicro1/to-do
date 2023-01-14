import { dom } from "./DOM"
import { Tasks } from "./task"

export const Projects = (() => {

    const projectsArray = []

    class Project {
        constructor(name, tasks) {
            this.name = name
            this.tasks = tasks
        }
    }

    function addProjectToArray() {
        const project = new Project()
        project.name = newProjectInput.value
        project.tasks = []
        projectsArray.push(project)
        console.log(projectsArray)
    }

    function deleteProjectFromArray() {
        const selectedProjectForRemove = document.querySelector('.projectSelectedForRemove')
        let e = selectedProjectForRemove.dataset.projectIndex
        projectsArray.splice(e, 1)
    }

    function deleteTaskInProject() {

    }

    return {
        projectsArray,
        deleteProjectFromArray,
        addProjectToArray,
    }
})()