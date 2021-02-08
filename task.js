class Task {

  constructor(task, taskAttributes) {
    this.id = task.id
    this.task = taskAttributes.task
    this.description = taskAttributes.description
    this.category = taskAttributes.category
    Task.all.push(this)
    console.log(this);
  }

renderTaskCard() {
     return `
     
            <h5>${this.task}</h5>
            <p>${this.description}</p>
            <p">Category: ${this.category.name}</p>
            <button data-id=${this.id}>Edit</button>`
}
}
Task.all = [];
