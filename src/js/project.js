export const Projects = (() => {

    let projectsArray = []

    class Project {
        constructor(name, tasks) {
            this.name = name
            this.tasks = tasks
        }
    }

    const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
    projectsArray = projectsFromStorage

    function addProjectToArray() {
        const project = new Project()
        project.name = newProjectInput.value
        project.tasks = []
        projectsArray.push(project)
    }

    function deleteProjectFromArray() {
        const selectedProjectForRemove = document.querySelector('.deleteProjectSpan')
        let e = selectedProjectForRemove.dataset.projectIndex
        projectsArray.splice(e, 1)
    }

    function updateProjectIndex() {
        projectsArray.forEach(project => {
            let projectCounter = projectsArray.indexOf(project)
            project.tasks.forEach(task => {
                task.projectIndex = projectCounter
            })
        })
    }

    return {
        projectsArray,
        deleteProjectFromArray,
        addProjectToArray,
        updateProjectIndex,
    }
})()