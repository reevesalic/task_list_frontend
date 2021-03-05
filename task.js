
class Task {

  constructor(task, taskAttributes) {
    this.id = task.id;
    this.task = taskAttributes.task;
    this.description = taskAttributes.description;
    this.category = taskAttributes.category;
    this.complete = taskAttributes.complete;
    Task.all.push(this);
    console.log(this);
  }

renderTaskCard() {
     return `
     
     <div class="tasklist"id=${this.id}>
    
<<<<<<< HEAD

     <h4> <input type="checkbox" class="complete" ${this.complete === true ? "checked" :  ""}><label data-id = ${this.id} for="complete"> </label> Task: ${this.task} </h4>

   
=======
     <h4> <input type="checkbox" class="complete" ${this.complete == true ? "checked" : ""}><label data-id = ${this.id} for="complete"> </label> Task: ${this.task} </h4>
>>>>>>> Minor formatting changes
            <p>Description: ${this.description}</p>
            <p">Category: ${this.category.category}</p>
            <input id="delete" type="button" name="delete" value="Delete Task" class="delete" data-id = ${this.id}>
            <br>
</div> 
`
            
}
}

Task.all = [];

