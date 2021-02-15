class Task {

  constructor(task, taskAttributes) {
    this.id = task.id
    this.task = taskAttributes.task
    this.description = taskAttributes.description
    this.category = taskAttributes.category
    this.complete = taskAttributes.complete
    Task.all.push(this)
    console.log(this)
  }

  
renderTaskCard() {
     return `
     
     <h5> <input type="checkbox" class="complete"><label for="complete" ${this.complete}> </label> Task: ${this.task}</h5>
            <p>Description: ${this.description}</p>
            <p">Category: ${this.category.category}</p>
            <input id="delete" type="button" name="delete" value="Delete Task" class="delete">

            <br>`
}
}



Task.all = [];
