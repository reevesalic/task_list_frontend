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
//  check to see if the box is checked or not
renderTaskCard() {
     return `
     
     <div class="tasklist"id=${this.id}>
    
     <h4> <input type="checkbox" class="complete" ${this.complete !== false ? "checked" :""}><label data-id = ${this.id} for="complete"> </label> Task: ${this.task} </h4>
            <p>Description: ${this.description}</p>
            <p">Category: ${this.category.category}</p>
            <input id="delete" type="button" name="delete" value="Delete Task" class="delete" data-id = ${this.id}>
            <br>
</div> 
`
            
}
}



// function check() {
//   document.getElementById(".complete").checked = true;
// }

// function uncheck() {
//   document.getElementById(".complete").checked = false;
// }

Task.all = [];
