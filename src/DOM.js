export function domManipulator() {
    collapseNavbar()
    collapseProjects()
    renderToday()
    renderAllTasks()
    renderCompletedTasks()
    renderProject()
    renderModals()
    exitModals()
}

const toggleMenu = document.querySelector('#toggleMenu')
const navigation = document.querySelector('nav')
const main = document.querySelector('body')
const showProjects = document.querySelector('#showProject')
const projects = document.querySelector('ul')
const collapseArrow = document.querySelector('#collapseArrow')
const todayButton = document.querySelector('#todayButton')
const allTasksButton = document.querySelector('#allTasksButton')
const completedButton = document.querySelector('#completedButton')
const title = document.querySelector('#title')
const project = document.querySelector('.project')
const modalContainer = document.querySelector('#modalContainer')
const addNewProjectButton = document.querySelector('#addNewProject')
const addNewProjectModal = document.querySelector('#addNewProjectModal')
const exitAddProjectButton = document.querySelector('#exitAddProject')
const cancelNewProject = document.querySelector('#cancelNewProject')
const newProjectInput = document.querySelector('#newProjectInput')
const removeProject = document.querySelector('#removeProject')
const deleteProjectModal = document.querySelector('#deleteProjectModal')
const exitDeleteProjectButton = document.querySelector('#exitDeleteProject')
const cancelDeleteProject = document.querySelector('#cancelDeleteProject')
const removeTask = document.querySelector('#removeTask')
const deleteTaskModal = document.querySelector('#deleteTaskModal')
const exitDeleteTaskButton = document.querySelector('#exitDeleteTask')
const cancelDeleteTask = document.querySelector('#cancelDeleteTask')
const addTaskButton = document.querySelector('#addTask')
const addTaskModal = document.querySelector('#addTaskModal')
const exitAddTask = document.querySelector('#exitAddTask')
const cancelAddTask = document.querySelector('#cancelAddTask')
const addTaskTitleInput = document.querySelector('#addTaskTitleInput')
const addTaskDescriptionInput = document.querySelector('#addTaskDescriptionInput')
const addTaskDateInput = document.querySelector('#addTaskDateInput')
const addTaskPriorityInput = document.querySelector('#addTaskPriorityInput')
const editTaskButton = document.querySelector('#editTask')
const editTaskModal = document.querySelector('#editTaskModal')
const exitEditTask = document.querySelector('#exitEditTask')
const cancelEditTask = document.querySelector('#cancelEditTask')
const editTaskTitleInput = document.querySelector('#editTaskTitleInput')
const editTaskDescriptionInput = document.querySelector('#editTaskDescriptionInput')
const editTaskDateInput = document.querySelector('#editTaskDateInput')
const editTaskPriorityInput = document.querySelector('#editTaskPriorityInput')


function collapseNavbar() {
    toggleMenu.addEventListener('click', () => {
        navigation.classList.toggle('collapse--navigation')
        main.classList.toggle('expand--main')
    })
}

function collapseProjects() {
    showProjects.addEventListener('click', () => {
        projects.classList.toggle('collapse--projects')
        collapseArrow.classList.toggle('rotate--arrow')
    })
}

function renderToday() {
    todayButton.addEventListener('click', () => {
        resetPage()
        title.textContent = 'Today'

    })
}

function renderAllTasks() {
    allTasksButton.addEventListener('click', () => {
        resetPage
        title.textContent = 'All Tasks'
    })
}

function renderCompletedTasks() {
    completedButton.addEventListener('click', () => {
        resetPage()
        title.textContent = 'Completed Tasks'
    })
}

function renderProject() {
    project.addEventListener('click', (e) => {
        title.textContent = e.target.classList
    })
}

function resetPage() {

}

function renderModals() {
    addNewProjectButton.addEventListener('click', () => {
        modalContainer.classList.remove('hidden')
        addNewProjectModal.classList.remove('hidden')
    })
    removeProject.addEventListener('click', () => {
        modalContainer.classList.remove('hidden')
        deleteProjectModal.classList.remove('hidden')
    })
    removeTask.addEventListener('click', () => {
        modalContainer.classList.remove('hidden')
        deleteTaskModal.classList.remove('hidden')
    })
    addTaskButton.addEventListener('click', () => {
        modalContainer.classList.remove('hidden')
        addTaskModal.classList.remove('hidden')
    })
    editTaskButton.addEventListener('click', () => {
        modalContainer.classList.remove('hidden')
        editTaskModal.classList.remove('hidden')
    })
}

function exitModals() {
    exitAddProjectButton.addEventListener('click', () => {
        modalContainer.classList.toggle('hidden')
        addNewProjectModal.classList.toggle('hidden')
        newProjectInput.value = ''
    })
    cancelNewProject.addEventListener('click', () => {
        modalContainer.classList.toggle('hidden')
        addNewProjectModal.classList.toggle('hidden')
        newProjectInput.value = ''
    })
    exitDeleteProjectButton.addEventListener('click', () => {
        modalContainer.classList.toggle('hidden')
        deleteProjectModal.classList.toggle('hidden')
    })
    cancelDeleteProject.addEventListener('click', () => {
        modalContainer.classList.toggle('hidden')
        deleteProjectModal.classList.toggle('hidden')
    })
    exitDeleteTaskButton.addEventListener('click', () => {
        modalContainer.classList.toggle('hidden')
        deleteTaskModal.classList.toggle('hidden')
    })
    cancelDeleteTask.addEventListener('click', () => {
        modalContainer.classList.toggle('hidden')
        deleteTaskModal.classList.toggle('hidden')
    })
    exitAddTask.addEventListener('click', () => {
        modalContainer.classList.toggle('hidden')
        addTaskModal.classList.toggle('hidden')
        addTaskTitleInput.value = ''
        addTaskDescriptionInput.value = ''
        addTaskDateInput.value = ''
        addTaskPriorityInput.value = ''
    })
    cancelAddTask.addEventListener('click', () => {
        modalContainer.classList.toggle('hidden')
        addTaskModal.classList.toggle('hidden')
        addTaskTitleInput.value = ''
        addTaskDescriptionInput.value = ''
        addTaskDateInput.value = ''
        addTaskPriorityInput.value = ''
    })
    exitEditTask.addEventListener('click', () => {
        modalContainer.classList.toggle('hidden')
        editTaskModal.classList.toggle('hidden')
        editTaskTitleInput.value = ''
        editTaskDescriptionInput.value = ''
        editTaskDateInput.value = ''
        editTaskPriorityInput.value = ''
    })
    cancelEditTask.addEventListener('click', () => {
        modalContainer.classList.toggle('hidden')
        editTaskModal.classList.toggle('hidden')
        editTaskTitleInput.value = ''
        editTaskDescriptionInput.value = ''
        editTaskDateInput.value = ''
        editTaskPriorityInput.value = ''
    })
}