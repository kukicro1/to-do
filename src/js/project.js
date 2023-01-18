import { dom } from "./DOM"
import { Tasks } from "./task"
import format from "date-fns/format"

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
        const selectedProjectForRemove = document.querySelector('.deleteProjectSpan')
        let e = selectedProjectForRemove.dataset.projectIndex
        projectsArray.splice(e, 1)
        
    }

    function resetProjectIndexInTask() {
        const projectDiv = document.querySelectorAll('div.project')
        projectsArray.forEach(project => {
            projectDiv.forEach(div => {
                if (div.textContent === project.name) {
                    project.tasks.forEach(task => {
                        console.log(task.projectIndex)
                        console.log(div.id)
                        task.projectIndex = div.id
                    })
                }
            })
        })
    }



    return {
        projectsArray,
        deleteProjectFromArray,
        addProjectToArray,
        resetProjectIndexInTask
    }
})()