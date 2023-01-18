import { dom } from "./DOM";
import { Projects } from "./project";
import { format, parse } from "date-fns"


export const Tasks = (() => {

    class Task {
        constructor(title, description, dueDate, priority, status, projectIndex, taskIndex) {
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
            this.status = status
            this.projectIndex = projectIndex
            this.taskIndex = taskIndex
        }
    }

    function addTaskToProject() {
        const selectedProject = document.querySelector('.selected')
        const selectedTask = document.querySelector('a')
        let projectIndex = selectedProject.dataset.projectIndex
        let taskIndex = ''
        const task = new Task()
        task.title = addTaskTitleInput.value
        task.description = addTaskDescriptionInput.value
        task.dueDate = addTaskDateInput.value
        task.priority = addTaskPriorityInput.value
        task.status = false
        task.projectIndex = projectIndex
        task.taskIndex = ''
        Projects.projectsArray[projectIndex].tasks.push(task)
        console.log(Projects.projectsArray)
    }
    function updateTaskIndex () {
        Projects.projectsArray[projectIndex].tasks.push(task)

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
                    console.log(formattedTaskDate, formattedToday)
                    // dom.updateTaskInProject()
                }
            })
        })
    }

    return {
        addTaskToProject,
        deleteTask,
        checkDate
    }
})()