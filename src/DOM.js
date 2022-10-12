export function domManipulator() {
    collapseNavbar()
    collapseProjects()
    renderToday()
    renderAllTasks()
    renderCompletedTasks()
    renderProject()
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
    project.addEventListener('click', (e)=>{
        title.textContent = e.target.classList
    })
}

function resetPage() {
    // title.textContent = ''
}