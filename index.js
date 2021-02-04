const endPoint = 'http://localhost:3000/api/v1/tasks'
document.addEventListener('DOMContentLoaded', () => {
     console.log("DOM is Loaded")
     getTasks
     // fetch and load task list
     function getTasks(){
     fetch(endPoint)
     .then(response => response.json)
     .then(tasks => {
          tasks.data.forEach(tasks => {
               let newTask = new tasks(task, task.attributes.task)
               document.querySelector('tasks-container').innerHTML += newSyllabus.renderTaskCard()
               
          })
     })
     // getTasks()
}
})