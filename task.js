renderTaskCard(task) {
     return `
     <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          
          <div class="card-body">
            <h5 class="card-task">${this.task}</h5>
            <p class="card-text">${this.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">Category: ${this.category.name}</small>
            </div>
          </div>
        </div>
      </div> `
}

