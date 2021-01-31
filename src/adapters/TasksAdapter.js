class TasksAdapter{
constructor(){
this.baseUrl = 'http://localhost:3000/api/v1/tasks'

}
getTasks() {
     return fetch(this.baseUrl).then(res => res.json()
     )
}
}

// adapter = new.TasksAdapter()
// const tasks = adapter.getTasks()
