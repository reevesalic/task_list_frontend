const endPoint = 'http://localhost:3000/api/v1/tasks'
document.addEventListener('DOMContentLoaded', () => {
     console.log("DOM is Loaded");
     getTasks()

     const createTaskForm = document.querySelector("#create-task-form")
    
     createTaskForm.addEventListener("submit", (e) => createFormHandler(e))
     
})
     // fetch and load task list
     function getTasks() {
     fetch(endPoint)
     .then(response => response.json())
     .then(tasks => {
          tasks.data.forEach(task => {
               let newTask = new Task(task, task.attributes)
               document.querySelector('#tasks-container').innerHTML += newTask.renderTaskCard()
               //delete button and display message.
               const matches = document.querySelectorAll('.delete'); 
          matches.forEach((item)=>{
               item.onclick=function(){
                    alert("deleted!")
               }
          })
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
     console.log(task, description, category_id)
     const bodyData = {task: {task, description, category_id}}
     fetch(endPoint, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(bodyData)
     })
     .then(response => response.json())
     .then(task => {
          
          const taskData = task.data
          let newTask = new Task(taskData, taskData.attributes)
          const container =
          document.querySelector('#tasks-container').innerHTML += newTask.renderTaskCard()
          const matches = document.querySelectorAll('.delete'); 
          matches.forEach((item)=>{
               item.onclick=function(){
                    alert("deleted!")
               }
          })
     })

          //checkbox
     completeTasksHolder.addEventListener("onclick", function(complete) {

          if (complete.target && complete.target.matches("input[type=checkbox]")) {
              
        
              var checkbox = complete.target;
              
              var item = checkbox.parentNode;
              checkbox.setAttribute("checked", "checked");
              completedTasksHolder.appendChild(item);  
          }
        });

          //delete task
        function removeTask(task){
          let taskToRemove = document.getElementById(task);
          taskToRemove.parentNode.removeChild(taskToRemove);
  }
 } 

