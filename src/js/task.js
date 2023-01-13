import { dom } from "./DOM";
import { Projects } from "./project";

export const Tasks = (() => {

    const taskArray = []

    class Task {
        constructor(title, description, dueDate, priority) {
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
        }
    }

    function addTaskToProject() {
        const task = new Task()
        task.title = addTaskTitleInput.value
        task.description = addTaskDescriptionInput.value
        task.dueDate = addTaskDateInput.value
        task.priority = addTaskPriorityInput.value
        taskArray.push(task)
        console.log(task)
        console.log(taskArray)
    }

    return {
        taskArray,
        addTaskToProject
    }
})()