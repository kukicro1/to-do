import { Projects } from "./project"
import { Tasks } from "./task"

export const dom = (() => {

    const navigation = document.querySelector('nav')
    const main = document.querySelector('body')
    const projects = document.querySelector('ul')
    const collapseArrow = document.querySelector('#collapseArrow')
    const title = document.querySelector('#title')
    const todayButton = document.querySelector('.todayButton')
    const allTasksButton = document.querySelector('.allTasksButton')
    const completedButton = document.querySelector('.completedButton')
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
    const message = document.querySelector('#delete-project-message')
    const deleteTaskSpan = document.querySelector("#delete-task-message")
    const wrapTask = document.querySelector('#wrapTask')
    const editTaskTitle = document.querySelector('.edit-task-title')

    function collapseNavbar(target) {
        target.classList.contains('fa-bars') ? target.classList = 'fa-solid fa-x'
            : target.classList = 'fa-solid fa-bars'
        navigation.classList.toggle('collapse--navigation')
        main.classList.toggle('expand--main')
    }

    function renderAddProjectModal() {
        modalContainer.classList.remove('hidden')
        addNewProjectModal.classList.remove('hidden')
    }

    function renderRemoveProjectModal(target) {
        let projectIndex = target.dataset.projectIndex
        const projectName = document.getElementById(projectIndex)
        const projectList = document.querySelector(`li[data-project-index="${projectIndex}"]`)
        const projectListAll = document.querySelectorAll(`li.project`)
        message.innerHTML = `Project <span class="boldText deleteProjectSpan" data-project-index="${projectIndex}">${projectName.textContent}</span> will be gone forever!`
        modalContainer.classList.remove('hidden')
        deleteProjectModal.classList.remove('hidden')
        projectListAll.forEach(list => {
            list.classList.remove('selected')
        })
        projectList.classList.add('selected')
    }

    function renderRemoveTaskModal(target) {
        let taskIndex = target.dataset.taskIndex
        let projectIndex = target.dataset.projectIndex
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

    function renderEditTaskModal(target) {
        editTaskTitle.dataset.projectIndex = target.dataset.projectIndex
        editTaskTitle.dataset.taskIndex = target.dataset.taskIndex
        modalContainer.classList.remove('hidden')
        editTaskModal.classList.remove('hidden')
    }

    function collapseProjects() {
        projects.classList.toggle('collapse--projects')
        collapseArrow.classList.toggle('rotate--arrow')
    }

    function renderToday() {
        removeSelection()
        allTasksButton.classList.remove('selected')
        completedButton.classList.remove('selected')
        todayButton.classList.add('selected')
        title.textContent = 'Today'
        resetTaskList()
        Tasks.checkDate()
    }

    function renderAllTasks() {
        removeSelection()
        todayButton.classList.remove('selected')
        completedButton.classList.remove('selected')
        allTasksButton.classList.add('selected')
        title.textContent = 'All Tasks'
        resetTaskList()
        Tasks.allTasks()
    }

    function renderCompletedTasks() {
        removeSelection()
        todayButton.classList.remove('selected')
        allTasksButton.classList.remove('selected')
        completedButton.classList.add('selected')
        title.textContent = 'Completed Tasks'
        resetTaskList()
        Tasks.checkCompleted()
    }

    function removeSelection() {
        const projectList = document.querySelectorAll('li.project')
        const listArray = Array.from(projectList)
        listArray.forEach(list => {
            list.classList.remove('selected')
        })
        todayButton.classList.remove('selected')
        completedButton.classList.remove('selected')
        allTasksButton.classList.remove('selected')
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
            if (target.id === 'toggleMenu') {
                collapseNavbar(target)
            }
            else if (target.classList.contains('addNewProject')) {
                renderAddProjectModal()
            }
            else if (target.classList.contains('removeProject')) {
                removeSelection()
                renderRemoveProjectModal(target)
                renderTaskList(target)
            }
            else if (target.classList.contains('removeTask')) {
                renderRemoveTaskModal(target)
            }
            else if (target.classList.contains('addTask')) {
                renderAddTaskModal()
            }
            else if (target.classList.contains('editTask')) {
                renderEditTaskModal(target)
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
            else if (target.classList.contains('showProject')) {
                collapseProjects()
            }
            else if (target.classList.contains('todayButton')) {
                Tasks.updateTaskIndex()
                renderToday()
            }
            else if (target.classList.contains('allTasksButton')) {
                Tasks.updateTaskIndex()
                renderAllTasks()
            }
            else if (target.classList.contains('completedButton')) {
                Tasks.updateTaskIndex()
                renderCompletedTasks()
            }
            else if (target.classList.contains('project')) {
                selectProjectField(target)
                renderTaskList(target)
            }
            else if (target.id === 'addProjectButton') {
                manageAddProjectModal()
                updateProjectInList()
            }
            else if (target.classList.contains('delete-project')) {
                deleteProjectFromList()
                Projects.deleteProjectFromArray()
                Projects.updateProjectIndex()
                Tasks.updateTaskIndex()
                updateProjectInList()
                resetTaskList()
                renderToday()
            }
            else if (target.id === 'addTask') {
                manageAddTaskModal()
                Tasks.updateTaskIndex()
            }
            else if (target.classList.contains('delete-task')) {
                renderDeleteTask()
            }
            else if (target.classList.contains('checkTask')) {
                Tasks.changeCheckStatus(target)
                if (title.textContent === 'Completed Tasks') {
                    renderCompletedTasks()
                }
            }
            else if (target.classList.contains('submit-edit-task')) {
                manageEditTaskModal(editTaskTitle.dataset.projectIndex, editTaskTitle.dataset.taskIndex)
            }
        })
    }

    function renderDeleteTask() {
        let taskIndex = deleteTaskSpan.dataset.taskIndex
        let projectIndex = deleteTaskSpan.dataset.projectIndex
        Tasks.deleteTask(taskIndex, projectIndex)
        Tasks.updateTaskIndex()
        deleteTaskFromList()
    }

    function renderPriority() {
        const taskList = document.querySelectorAll('.taskList')
        taskList.forEach(task => {
            let projectIndex = task.dataset.projectIndex
            let taskIndex = task.dataset.taskIndex
            let priority = Projects.projectsArray[projectIndex].tasks[taskIndex].priority
            if (priority === 'notImportant') {
                task.classList.add('notImportant')
            }
            else if (priority === 'important') {
                task.classList.add('important')
            }
            else if (priority === 'veryImportant')
                task.classList.add('veryImportant')
        })
    }

    function markAsChecked(projectIndex, taskIndex, checkTask) {
        let checkStatus = Projects.projectsArray[projectIndex].tasks[taskIndex].checkStatus
        if (checkStatus === true) {
            checkTask.checked = true
        }
        else if (checkStatus === false) {
            checkTask.checked = false
        }
    }

    function selectProjectField(target) {
        removeSelection()
        const projectList = document.querySelectorAll('li.project')
        const projectNameContainer = document.querySelectorAll('div.project')
        const listArray = Array.from(projectList)
        const containerArray = Array.from(projectNameContainer)
        listArray.forEach(list => {
            if (target.classList === list.classList) {
                listArray.forEach(listedElement => {
                    listedElement.classList.remove('selected')
                })
                list.classList.add('selected')
            }
        })
        containerArray.forEach(container => {
            const containerCounter = containerArray.indexOf(container)
            if (target.classList === container.classList) {
                listArray.forEach(listedElement => {
                    listedElement.classList.remove('selected')
                })
                listArray[containerCounter].classList.add('selected')
            }
        })
    }

    function renderTaskList(target) {
        let projectIndex = target.dataset.projectIndex
        const projectList = document.querySelector(`li[data-project-index="${projectIndex}"]`)
        target.classList.contains('removeProject') ? title.textContent = projectList.textContent : title.textContent = target.textContent
        updateTaskInProject()
    }

    function resetTaskList() {
        wrapTask.textContent = ''
    }

    function renderTask(projectIndex, taskIndex, task) {
        const wrapEachTask = document.createElement('div')
        const wrapper1 = document.createElement('div')
        const checkTask = document.createElement('input')
        const wrapTaskName = document.createElement('div')
        const wrapper2 = document.createElement('div')
        const wrapTaskDate = document.createElement('div')
        const wrapEditTask = document.createElement('div')
        const editTaskIcon = document.createElement('i')
        const wrapRemoveTask = document.createElement('div')
        const removeTaskIcon = document.createElement('i')
        wrapEachTask.classList = 'taskList'
        wrapper1.classList = 'wrapper1'
        wrapper1.setAttribute('title', 'Open Task')
        checkTask.classList = 'checkTask'
        checkTask.setAttribute('type', 'checkbox')
        checkTask.setAttribute('title', 'Mark as completed')
        wrapTaskName.classList = 'taskName'
        wrapTaskName.id = `task-${taskIndex}`
        wrapper2.classList = 'wrapper2'
        wrapTaskDate.classList = 'taskDate'
        wrapEditTask.classList = 'editTask'
        wrapEditTask.setAttribute('title', 'Edit Task')
        editTaskIcon.classList = 'fa-regular fa-pen-to-square editTask'
        wrapRemoveTask.classList = 'removeTask'
        wrapRemoveTask.setAttribute('title', 'Remove Task')
        removeTaskIcon.classList = 'fa-regular fa-trash-can removeTask'
        wrapTask.append(wrapEachTask)
        wrapEachTask.append(wrapper1, wrapper2)
        wrapper1.append(checkTask, wrapTaskName)
        wrapper2.append(wrapTaskDate, wrapEditTask, wrapRemoveTask)
        wrapEditTask.append(editTaskIcon)
        wrapRemoveTask.append(removeTaskIcon)
        wrapTaskName.textContent = task.title
        wrapTaskDate.textContent = task.dueDate
        editTaskIcon.setAttribute('data-project-index', projectIndex)
        editTaskIcon.setAttribute('data-task-index', taskIndex)
        checkTask.setAttribute('data-project-index', projectIndex)
        checkTask.setAttribute('data-task-index', taskIndex)
        removeTaskIcon.setAttribute('data-project-index', projectIndex)
        removeTaskIcon.setAttribute('data-task-index', taskIndex)
        wrapEachTask.setAttribute('data-project-index', projectIndex)
        wrapEachTask.setAttribute('data-task-index', taskIndex)
        markAsChecked(projectIndex, taskIndex, checkTask)
        renderPriority()
    }

    function updateTaskInProject() {
        resetTaskList()
        const selectedProject = document.querySelector('.selected')
        let projectIndex = selectedProject.dataset.projectIndex
        let arrayOfTasksInProject = Projects.projectsArray[projectIndex].tasks
        arrayOfTasksInProject.forEach(task => {
            let taskIndex = arrayOfTasksInProject.indexOf(task)
            renderTask(projectIndex, taskIndex, task)
        })
    }

    function manageAddTaskModal() {
        const selectedProject = document.querySelector('.selected')
        if (addTaskTitleInput.value === '' ||
            addTaskDescriptionInput.value === '' ||
            addTaskDateInput.value === '' ||
            addTaskPriorityInput.value === '') {
            alert('Please fill in empty slots.')
        }
        else if (title.textContent === 'Today' ||
            title.textContent === 'All Tasks' ||
            title.textContent === 'Completed Tasks') {
            alert('You have to chose project to add tasks.')
        }
        else {
            Tasks.addTaskToProject(selectedProject)
            updateTaskInProject()
            modalContainer.classList.toggle('hidden')
            addTaskModal.classList.toggle('hidden')
            addTaskTitleInput.value = ''
            addTaskDescriptionInput.value = ''
            addTaskDateInput.value = ''
            addTaskPriorityInput.value = ''
        }
    }

    function manageEditTaskModal(projectIndex, taskIndex) {
        if (editTaskTitleInput.value === '' ||
            editTaskDescriptionInput.value === '' ||
            editTaskDateInput.value === '' ||
            editTaskPriorityInput.value === '') {
            alert('Please fill in empty slots.')
        }
        else {
            Tasks.editTask(projectIndex, taskIndex)
            if (title.textContent === 'Today') {
                renderToday()
            }
            else if (title.textContent === 'All Tasks') { 
                renderAllTasks()
            }
            else if (title.textContent === 'Completed Tasks') { 
                renderCompletedTasks()
            }
            else {
                updateTaskInProject()
            }
            modalContainer.classList.toggle('hidden')
            editTaskModal.classList.toggle('hidden')
            editTaskTitleInput.value = ''
            editTaskDescriptionInput.value = ''
            editTaskDateInput.value = ''
            editTaskPriorityInput.value = ''
        }
    }

    function deleteTaskFromList() {
        const selectedProject = document.querySelector('.selected')
        if (selectedProject.classList.contains('project')) {
            updateTaskInProject()
        }
        else if (selectedProject.classList.contains('todayButton')) {
            renderToday()
            renderPriority()
        }
        else if (selectedProject.classList.contains('allTasksButton')) {
            renderAllTasks()
            renderPriority()
        }
        else if (selectedProject.classList.contains('completedButton')) {
            renderCompletedTasks()
            renderPriority()
        }
        modalContainer.classList.toggle('hidden')
        deleteTaskModal.classList.toggle('hidden')
        newProjectInput.value = ''
    }

    function updateProjectInList() {
        const listOfProjects = document.querySelector('#listOfProjects')
        listOfProjects.textContent = ''
        let arrayOfProjectObjects = Projects.projectsArray
        arrayOfProjectObjects.forEach(project => {
            const projectList = document.createElement('li')
            const projectNameContainer = document.createElement('div')
            const projectTrash = document.createElement('i')
            const projectIndex = arrayOfProjectObjects.indexOf(project)
            listOfProjects.append(projectList)
            projectList.append(projectNameContainer, projectTrash)
            projectList.dataset.projectIndex = projectIndex
            projectList.classList = 'project'
            projectNameContainer.textContent = project.name
            projectNameContainer.id = projectIndex
            projectNameContainer.classList = 'project'
            projectTrash.setAttribute('data-project-index', projectIndex)
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
        const selectedProjectForRemove = document.querySelector('.deleteProjectSpan')
        let projectIndex = selectedProjectForRemove.dataset.projectIndex
        let projectContainer = document.querySelector(`li[data-project-index="${projectIndex}"]`)
        projectContainer.remove()
        modalContainer.classList.toggle('hidden')
        deleteProjectModal.classList.toggle('hidden')
        newProjectInput.value = ''
    }

    return {
        eventHandler,
        updateTaskInProject,
        renderTask
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