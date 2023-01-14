import { dom } from "./DOM";
import { Projects } from "./project";

export const Tasks = (() => {

    // const taskArray = []

    class Task {
        constructor(title, description, dueDate, priority, status) {
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
            this.status = status
        }
    }

    function addTaskToProject() {
        const task = new Task()
        task.title = addTaskTitleInput.value
        task.description = addTaskDescriptionInput.value
        task.dueDate = addTaskDateInput.value
        task.priority = addTaskPriorityInput.value
        task.status = false
        const title = document.querySelector('#title')
        let e = title.dataset.projectIndex
        Projects.projectsArray[e].tasks.push(task)
        // taskArray.push(task)
        // console.log(taskArray)
    }

    function deleteTask() {
        const taskSelectedForDeletion = document.querySelector('#delete-task-message')
        let e = taskSelectedForDeletion.dataset.taskIndex
        let n = taskSelectedForDeletion.dataset.projectIndex
        let taskInProjectArray = Projects.projectsArray[n].tasks
        // taskArray.splice(e, 1)
        taskInProjectArray.splice(e, 1)
        // console.log(taskArray)
        console.log(Projects.projectsArray)
    }

    return {
        // taskArray,
        
        addTaskToProject,
        deleteTask
    }
})()