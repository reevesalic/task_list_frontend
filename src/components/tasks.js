class Tasks {
     constructor() {
          this.tasks = []
          this.adapter = new.TasksAdapter()
          this.bindEventListeners()
          this.fetchAndLoadTasks()

          fetchAndLoadTasks() {
               this.adapter.getTasks().then(tasks => {
                    console.log(tasks)
               })
          }
     }
}