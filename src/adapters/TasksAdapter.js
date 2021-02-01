class TasksAdapter{
constructor(){
this.baseUrl = 'http://localhost:3000/api/v1/tasks'

}
// get tasks method. fetches the baseUrl and parses the tasks.
getTasks() {
     return fetch(this.baseUrl).then(res => res.json()
     )
}
}

// adapter = new.TasksAdapter()
// const tasks = adapter.getTasks()
