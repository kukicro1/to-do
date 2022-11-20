import { Projects } from "./project"

export const dom = (() => {

    const navigation = document.querySelector('nav')
    const main = document.querySelector('body')
    const projects = document.querySelector('ul')
    const collapseArrow = document.querySelector('#collapseArrow')
    const title = document.querySelector('#title')
    const modalContainer = document.querySelector('#modalContainer')
    const addNewProjectModal = document.querySelector('#addNewProjectModal')
    const newProjectInput = document.querySelector('#newProjectInput')
    const deleteProjectModal = document.querySelector('#deleteProjectModal')
    const deleteTaskModal = document.querySelector('#deleteTaskModal')
    const addTaskModal = document.querySelector('#addTaskModal')
    const addTaskTitleInput = document.querySelector('#addTaskTitleInput')
    const addTaskDescriptionInput = document.querySelector('#addTaskDescriptionInput')
    const addTaskDateInput = document.querySelector('#addTaskDateInput')
    const addTaskPriorityInput = document.querySelector('#addTaskPriorityInput')
    const editTaskModal = document.querySelector('#editTaskModal')
    const editTaskTitleInput = document.querySelector('#editTaskTitleInput')
    const editTaskDescriptionInput = document.querySelector('#editTaskDescriptionInput')
    const editTaskDateInput = document.querySelector('#editTaskDateInput')
    const editTaskPriorityInput = document.querySelector('#editTaskPriorityInput')

    function resetPage() {

    }

    function renderAddProjectModal() {
        modalContainer.classList.remove('hidden')
        addNewProjectModal.classList.remove('hidden')
    }

    function renderRemoveProjectModal(e) {
        let id = e.dataset.projectIndex
        const message = document.querySelector('#delete-project-message')
        const projectName = document.getElementById(id)
        message.innerHTML = `Project <span class="boldText">${projectName.textContent}</span> will be gone forever!`
        modalContainer.classList.remove('hidden')
        deleteProjectModal.classList.remove('hidden')
    }

    function renderRemoveTaskModal() {
        modalContainer.classList.remove('hidden')
        deleteTaskModal.classList.remove('hidden')
    }

    function renderAddTaskModal() {
        modalContainer.classList.remove('hidden')
        addTaskModal.classList.remove('hidden')
    }

    function renderEditTaskModal() {
        modalContainer.classList.remove('hidden')
        editTaskModal.classList.remove('hidden')
    }

    function collapseNavbar() {
        navigation.classList.toggle('collapse--navigation')
        main.classList.toggle('expand--main')
    }

    function collapseProjects() {
        projects.classList.toggle('collapse--projects')
        collapseArrow.classList.toggle('rotate--arrow')
    }

    function renderToday() {
        resetPage()
        title.textContent = 'Today'
    }

    function renderAllTasks() {
        resetPage()
        title.textContent = 'All Tasks'
    }

    function renderCompletedTasks() {
        resetPage()
        title.textContent = 'Completed Tasks'
    }

    function exitAddProject() {
        modalContainer.classList.toggle('hidden')
        addNewProjectModal.classList.toggle('hidden')
        newProjectInput.value = ''
    }

    function exitDeleteProject() {
        modalContainer.classList.toggle('hidden')
        deleteProjectModal.classList.toggle('hidden')
    }

    function exitDeleteTask() {
        modalContainer.classList.toggle('hidden')
        deleteTaskModal.classList.toggle('hidden')
    }

    function exitEditTask() {
        modalContainer.classList.toggle('hidden')
        editTaskModal.classList.toggle('hidden')
        editTaskTitleInput.value = ''
        editTaskDescriptionInput.value = ''
        editTaskDateInput.value = ''
        editTaskPriorityInput.value = ''
    }

    function exitAddTask() {
        modalContainer.classList.toggle('hidden')
        addTaskModal.classList.toggle('hidden')
        addTaskTitleInput.value = ''
        addTaskDescriptionInput.value = ''
        addTaskDateInput.value = ''
        addTaskPriorityInput.value = ''
    }


    function eventHandler() {
        document.addEventListener('click', (event) => {
            const { target } = event
            if (target.classList.contains('addNewProject')) {
                renderAddProjectModal()
            }

            else if (target.classList.contains('removeProject')) {
                renderRemoveProjectModal(target)
            }
            else if (target.classList.contains('removeTask')) {
                renderRemoveTaskModal()
            }
            else if (target.classList.contains('addTask')) {
                renderAddTaskModal()
            }
            else if (target.classList.contains('editTask')) {
                renderEditTaskModal()
            }
            else if (target.classList.contains('exit-project')) {
                exitAddProject()
            }
            else if (target.classList.contains('exit-delete-project')) {
                exitDeleteProject()
            }
            else if (target.classList.contains('exit-delete-task')) {
                exitDeleteTask()
            }
            else if (target.classList.contains('exit-edit-task')) {
                exitEditTask()
            }
            else if (target.classList.contains('exit-add-task')) {
                exitAddTask()
            }
            else if (target.id === 'toggleMenu') {
                collapseNavbar()
            }
            else if (target.classList.contains('showProject')) {
                collapseProjects()
            }
            else if (target.classList.contains('todayButton')) {
                renderToday()
            }
            else if (target.classList.contains('allTasksButton')) {
                renderAllTasks()
            }
            else if (target.classList.contains('completedButton')) {
                renderCompletedTasks()
            }
            else if (target.classList.contains('project')) {
                title.textContent = target.textContent
            }
            else if (target.id === 'addProjectButton') {
                Projects.manageAddProjectModal()
                showProjectInList()
            }
            else if (target.classList.contains('delete-project')) {
                //Ne može biti target kad je button koji nema dataset!!!!!!
                Projects.deleteProjectFromArray(target.dataset.projectIndex)
                console.log(Projects.projectsArray)
                deleteProjectFromList(target)
            }
        })
    }

    function showProjectInList() {
        const projectInList = document.createElement('li')
        const projectsList = document.querySelector('#projectsList')
        const projectNameContainer = document.createElement('div')
        const projectTrash = document.createElement('i')
        let arrayOfProjectObjects = Projects.projectsArray
        arrayOfProjectObjects.forEach(el => {
            const e = arrayOfProjectObjects.indexOf(el)
            projectNameContainer.textContent = arrayOfProjectObjects[e].name
            projectInList.dataset.projectIndex = e
            projectTrash.setAttribute('data-project-index', e)
            projectNameContainer.id = e
            projectNameContainer.classList = 'project'
            projectTrash.classList = 'fa-regular fa-trash-can removeProject'
            if (e === 0) {
                return (
                    projectsList.append(projectInList),
                    projectInList.append(projectNameContainer),
                    projectInList.append(projectTrash)
                )
            }
            else if (e >= 0) {
                return (
                    projectsList.append(projectInList),
                    projectInList.append(projectNameContainer),
                    projectInList.append(projectTrash)
                )
            }
        })
    }

    function deleteProjectFromList(e) {
        let id = e.dataset.projectIndex
        console.log(id)
        const projectContainer = document.querySelector(`li[data-project-index='${id}']`)
        console.log(projectContainer)
        modalContainer.classList.toggle('hidden')
        deleteProjectModal.classList.toggle('hidden')
        newProjectInput.value = ''
        
    }

    return {
        resetPage,
        eventHandler
    }
})()


const preventEnter = (() => {
    const addNewProjectForm = document.querySelector('#addNewProjectForm')
    addNewProjectForm.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            return false;
        }
    })
})()