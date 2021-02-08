const endPoint = 'http://localhost:3000/api/v1/tasks'
document.addEventListener('DOMContentLoaded', () => {
     console.log("DOM is Loaded");
     getTasks()

     const createTaskForm = document.querySelector("create-task-form")
    
     createTaskForm.addEventListener("submit", (e) => createFormHandler(e))
})
     // fetch and load task list
     function getTasks(task){
     fetch(endPoint)
     .then(response => response.json)
     .then(tasks => {
          tasks.data.forEach(tasks => {
               let newTask = new tasks(tasks, task.attributes)
               document.querySelector('tasks-container').innerHTML += newTask.renderTaskCard()
               
          })
    
     })
}

function createFormHandler(e) {
     e.preventDefault()
     const taskInput = document.querySelector('#input-task').value
     const descriptionInput = document.querySelector('#input-description').value
     const categoryId = parseInt(document.querySelector('#categories').value)
     postFetch(taskInput, descriptionInput, categoryId)
}
function postFetch(task, description, category_id) {
     // console.log(task, description, category_id)
     const bodyData = {task, description, category_id}
     fetch(endPoint, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(bodyData)
     })
     .then(response => response.json())
     .then(task => {
          
          const taskData = task.data.attributes
          let newTask = newTask(taskData, taskData.attributes)
          document.querySelector('#task-container').innerHTML += newTask.renderTaskCard(task)
          
     })
}