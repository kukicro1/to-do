import { dom } from "./DOM"

export const Projects = (() => {

    const projectsArray = []

    class Project {
        constructor(name) {
            this.name = name
            this.tasks = []
        }
    }

    function addProjectToArray() {
        const project = new Project()
        project.name = newProjectInput.value
        projectsArray.push(project)
    }

    function manageAddProjectModal () {
        if (newProjectInput.value === '') {
            alert('Please enter project name.')
        }
        else {
            addProjectToArray()
            console.log(projectsArray)
            addNewProjectForm.reset()
            modalContainer.classList.toggle('hidden')
            addNewProjectModal.classList.toggle('hidden')
            newProjectInput.value = ''
        }
    }

    function deleteProjectFromArray(e) {
        projectsArray.splice(e, 1)
    }

    function saveProject() {

    }

    return {
        projectsArray,
        manageAddProjectModal,
        deleteProjectFromArray,
        saveProject
    }
})()