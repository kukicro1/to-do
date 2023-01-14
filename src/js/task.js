import { dom } from "./DOM";
import { Projects } from "./project";

export const Tasks = (() => {

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
        let projectIndex = title.dataset.projectIndex
        Projects.projectsArray[projectIndex].tasks.push(task)
    }

    function deleteTask() {
        const taskSelectedForDeletion = document.querySelector('#delete-task-message')
        let taskIndex = taskSelectedForDeletion.dataset.taskIndex
        let projectIndex = taskSelectedForDeletion.dataset.projectIndex
        let taskInProjectArray = Projects.projectsArray[projectIndex].tasks
        taskInProjectArray.splice(taskIndex, 1)
        console.log(Projects.projectsArray)
    }

    return {
        addTaskToProject,
        deleteTask
    }
})()