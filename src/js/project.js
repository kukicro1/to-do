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
        projectsArray.push(project.name)
        console.log(projectsArray)
    }
 // if (newProjectInput.value === '') {
        //     alert('Please enter project name.')
        // }
        // else {
        // addNewProjectForm.reset()
        // modalContainer.classList.toggle('hidden')
        // addNewProjectModal.classList.toggle('hidden')
        // newProjectInput.value = ''
        // }
        // displayProject()
        // }
        
    function deleteProject() {

    }

    function saveProject() {

    }

    return {
        projectsArray,
        addProjectToArray,
        deleteProject,
        saveProject
    }
})()