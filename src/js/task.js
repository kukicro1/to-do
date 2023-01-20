import { dom } from "./DOM";
import { Projects } from "./project";
import { format, parse } from "date-fns"

export const Tasks = (() => {

    class Task {
        constructor(title, description, dueDate, priority, checkStatus, projectIndex, taskIndex) {
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
            this.checkStatus = checkStatus
            this.projectIndex = projectIndex
            this.taskIndex = taskIndex
        }
    }

    function addTaskToProject(selectedProject) {
        let projectIndex = selectedProject.dataset.projectIndex
        const task = new Task()
        task.title = addTaskTitleInput.value
        task.description = addTaskDescriptionInput.value
        task.dueDate = addTaskDateInput.value
        task.priority = addTaskPriorityInput.value
        task.checkStatus = false
        task.projectIndex = ''
        task.taskIndex = ''
        Projects.projectsArray[projectIndex].tasks.push(task)
        Projects.updateProjectIndex()
    }

    function updateTaskIndex() {
        Projects.projectsArray.forEach(project => {
            project.tasks.forEach(task => {
                let taskCounter = project.tasks.indexOf(task)
                task.taskIndex = taskCounter
                console.log(Projects.projectsArray)
            })
        })
    }

    function deleteTask(taskIndex, projectIndex) {
        let taskInProjectArray = Projects.projectsArray[projectIndex].tasks
        taskInProjectArray.splice(taskIndex, 1)
        console.log(Projects.projectsArray)
    }

    function checkDate() {
        const todayDate = new Date()
        const formattedToday = format(todayDate, 'dd-MM-yyyy')
        Projects.projectsArray.forEach(project => {
            project.tasks.forEach(task => {
                const parseDueDate = parse(task.dueDate, 'yyyy-MM-dd', new Date())
                const formattedTaskDate = format(parseDueDate, 'dd-MM-yyyy')
                if (formattedTaskDate === formattedToday) {
                    dom.renderTask(task.projectIndex, task.taskIndex, task)
                }
            })
        })
    }

    function allTasks() {
        Projects.projectsArray.forEach(project => {
            project.tasks.forEach(task => {
                dom.renderTask(task.projectIndex, task.taskIndex, task)
            })
        })
    }

    function changeCheckStatus(checkInput) {
        let projectIndex = checkInput.dataset.projectIndex
        let taskIndex = checkInput.dataset.taskIndex
        Projects.projectsArray[projectIndex].tasks[taskIndex].checkStatus = checkInput.checked ? true : false
    }

    function checkCompleted() {
        Projects.projectsArray.forEach(project => {
            project.tasks.forEach(task => {
                task.checkStatus ? dom.renderTask(task.projectIndex, task.taskIndex, task) : undefined
            })
        })
    }

    return {
        addTaskToProject,
        deleteTask,
        checkDate,
        updateTaskIndex,
        allTasks,
        changeCheckStatus,
        checkCompleted,
    }
})()