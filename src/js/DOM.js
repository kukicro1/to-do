import { Projects } from "./project"
import { Tasks } from "./task"

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

    function renderAddProjectModal() {
        modalContainer.classList.remove('hidden')
        addNewProjectModal.classList.remove('hidden')
    }

    function renderRemoveProjectModal(e) {
        let projectIndex = e.dataset.projectIndex
        const message = document.querySelector('#delete-project-message')
        const projectName = document.getElementById(projectIndex)
        message.innerHTML = `Project <span class="boldText projectSelectedForRemove" data-project-index="${projectIndex}">${projectName.textContent}</span> will be gone forever!`
        modalContainer.classList.remove('hidden')
        deleteProjectModal.classList.remove('hidden')
    }

    function renderRemoveTaskModal(e) {
        let taskIndex = e.dataset.taskIndex
        let projectIndex = e.dataset.projectIndex
        const deleteTaskSpan = document.querySelector("#delete-task-message")
        const taskName = document.getElementById(`task-${taskIndex}`)
        deleteTaskSpan.textContent = taskName.textContent
        deleteTaskSpan.setAttribute('data-task-index', taskIndex)
        deleteTaskSpan.setAttribute('data-project-index', projectIndex)
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
        // resetPage()
        title.textContent = 'Today'
    }

    function renderAllTasks() {
        // resetPage()
        title.textContent = 'All Tasks'
    }

    function renderCompletedTasks() {
        // resetPage()
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
                renderRemoveTaskModal(target)
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
                renderTaskList(target)
            }
            else if (target.id === 'addProjectButton') {
                manageAddProjectModal()
                updateProjectInList()
            }
            else if (target.classList.contains('delete-project')) {
                Projects.deleteProjectFromArray()
                deleteProjectFromList()
                updateProjectInList()
                resetTaskList()
                renderToday()
            }
            else if (target.id === 'addTask') {
                manageAddTaskModal()
                console.log(Projects.projectsArray)
            }
            else if (target.classList.contains('delete-task')) {
                Tasks.deleteTask()
                deleteTaskFromList()
            }
        })
    }

    function renderTaskList(target) {
        let projectId = target.id
        title.textContent = target.textContent
        title.dataset.projectIndex = projectId
        updateTaskInProject()
    }

    function resetTaskList() {
        const wrapTask = document.querySelector('#wrapTask')
        wrapTask.textContent = ''
    }

    function updateTaskInProject() {
        resetTaskList()
        let projectIndex = title.dataset.projectIndex
        let arrayOfTasksInProject = Projects.projectsArray[projectIndex].tasks
        arrayOfTasksInProject.forEach(el => {
            let taskIndex = arrayOfTasksInProject.indexOf(el)
            const wrapEachTask = document.createElement('div')
            wrapEachTask.classList = 'taskList'
            const wrapper1 = document.createElement('div')
            wrapper1.classList = 'wrapper1'
            wrapper1.setAttribute('title', 'Open Task')
            const checkTask = document.createElement('input')
            const wrapTaskName = document.createElement('div')
            checkTask.classList = 'checkTask'
            checkTask.setAttribute('type', 'checkbox')
            checkTask.setAttribute('title', 'Mark as completed')
            wrapTaskName.classList = 'taskName'
            wrapTaskName.id = `task-${taskIndex}`
            const wrapper2 = document.createElement('div')
            wrapper2.classList = 'wrapper2'
            const wrapTaskDate = document.createElement('div')
            wrapTaskDate.classList = 'taskDate'
            const wrapEditTask = document.createElement('div')
            wrapEditTask.classList = 'editTask'
            wrapEditTask.setAttribute('title', 'Edit Task')
            const editTaskIcon = document.createElement('i')
            editTaskIcon.classList = 'fa-regular fa-pen-to-square editTask'
            const wrapRemoveTask = document.createElement('div')
            wrapRemoveTask.classList = 'removeTask'
            wrapRemoveTask.setAttribute('title', 'Remove Task')
            const removeTaskIcon = document.createElement('i')
            removeTaskIcon.classList = 'fa-regular fa-trash-can removeTask'
            wrapTask.append(wrapEachTask)
            wrapEachTask.append(wrapper1, wrapper2)
            wrapper1.append(checkTask, wrapTaskName)
            wrapper2.append(wrapTaskDate, wrapEditTask, wrapRemoveTask)
            wrapEditTask.append(editTaskIcon)
            wrapRemoveTask.append(removeTaskIcon)
            wrapTaskName.textContent = el.title
            wrapTaskDate.textContent = el.dueDate
            removeTaskIcon.setAttribute('data-project-index', projectIndex)
            removeTaskIcon.setAttribute('data-task-index', taskIndex)
            wrapEachTask.setAttribute('data-task-index', taskIndex)
        })

    }

    function deleteTaskFromList() {
        updateTaskInProject()
        modalContainer.classList.toggle('hidden')
        deleteTaskModal.classList.toggle('hidden')
        newProjectInput.value = ''
    }

    function manageAddTaskModal() {
        if (addTaskTitleInput.value === '' ||
            addTaskDescriptionInput.value === '' ||
            addTaskDateInput.value === '' ||
            addTaskPriorityInput.value === '') {
            alert('Please fill in empty slots.')
        }
        else {
            Tasks.addTaskToProject()
            updateTaskInProject()
            modalContainer.classList.toggle('hidden')
            addTaskModal.classList.toggle('hidden')
            addTaskTitleInput.value = ''
            addTaskDescriptionInput.value = ''
            addTaskDateInput.value = ''
            addTaskPriorityInput.value = ''
        }
    }

    function updateProjectInList() {
        const projectsList = document.querySelector('#projectsList')
        projectsList.textContent = ''
        let arrayOfProjectObjects = Projects.projectsArray
        arrayOfProjectObjects.forEach(el => {
            const projectInList = document.createElement('li')
            const projectNameContainer = document.createElement('div')
            const projectTrash = document.createElement('i')
            const projectIndex = arrayOfProjectObjects.indexOf(el)
            projectsList.append(projectInList)
            projectInList.append(projectNameContainer)
            projectInList.append(projectTrash)
            projectNameContainer.textContent = el.name
            projectInList.dataset.projectIndex = projectIndex
            projectTrash.setAttribute('data-project-index', projectIndex)
            projectNameContainer.id = projectIndex
            projectNameContainer.classList = 'project'
            projectTrash.classList = 'fa-regular fa-trash-can removeProject'
        })
    }

    function manageAddProjectModal() {
        if (newProjectInput.value === '') {
            alert('Please enter project name.')
        }
        else {
            Projects.addProjectToArray()
            modalContainer.classList.toggle('hidden')
            addNewProjectModal.classList.toggle('hidden')
            newProjectInput.value = ''
        }
    }

    function deleteProjectFromList() {
        const selectedProjectForRemove = document.querySelector('.projectSelectedForRemove')
        let projectIndex = selectedProjectForRemove.dataset.projectIndex
        let projectContainer = document.querySelector(`li[data-project-index="${projectIndex}"]`)
        projectContainer.remove()
        modalContainer.classList.toggle('hidden')
        deleteProjectModal.classList.toggle('hidden')
        newProjectInput.value = ''
    }

    return {
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