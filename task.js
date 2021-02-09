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
            <p">Category: ${this.category.category}</p>
            <button data-id=${this.id}>Edit</button>`
            
}

renderUpdateForm() {
  return `
  <form data-id=${this.id} >
    <h3>Edit a Task!</h3>

    <label>Task</label>
    <input id='input-task' type="text" name="task" value="${this.task}" class="input-text">
    <br><br>

    <label>Description</label>
    <textarea id='input-description' name="description" rows="8" cols="80" value="">${this.description}</textarea>
    <br><br>

  
    <label>Category</label>
    <select id="categories" name="categories" value="${this.category.category}">
      <option value="1">Financial</option>
      <option value="2">Health</option>
      <option value="3">Misc</option>
    </select>
    <br><br>

    <input id='edit-button' type="submit" name="submit" value="Edit Task" class="submit">
  </form>
`;
}
}

Task.all = [];
