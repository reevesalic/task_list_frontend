const endPoint = "http://localhost:3000/api/v1/tasks";
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is Loaded");
    getTasks();

    const createTaskForm = document.querySelector("#create-task-form");

    createTaskForm.addEventListener("submit", (e) => createFormHandler(e));
});
// fetch and load task list
function getTasks() {
    let ttaskList = [];
    fetch(endPoint)
        .then((response) => response.json())
        .then((tasks) => {
            
                tasks.data.forEach((task) => {
                let newTask = new Task(task, task.attributes);
                document.querySelector("#tasks-container").innerHTML += newTask.renderTaskCard();
                ttaskList.push(newTask);                                                                      

                           
            });
            

        }).then(() => {
            let tContain = document.querySelector("#tasks-container");
            completeChecks = tContain.querySelectorAll(".complete");
            for (const c of completeChecks) {
                const specificTask = ttaskList.filter((x) => x.id === c.parentNode.parentNode.id.toString());
                c.addEventListener('change', (e) => {
                    e.preventDefault();
                    const ID = e.target.parentNode.parentNode.id;
                    const complete = e.target.checked;
                
                    setCheckComplete(specificTask, ID, complete);
                });
            }

            //delete button and display message.
            const matches = document.querySelector("#tasks-container").querySelectorAll(".delete");
            matches.forEach((button, index) => {
                button.onclick = (e) => {
                    const filteredItems = ttaskList.filter((x) => x.id !== index);
                    
                    fetch(`http://localhost:3000/api/v1/tasks/${button.dataset.id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(filteredItems),
                        
                    });
                    let delTask = ttaskList.filter((x) => x.id === e.target.parentNode.parentNode.id);

                    document.getElementById(delTask[0].id).remove();

                };
            });
        });
        
}

function createFormHandler(e) {
    e.preventDefault();
    const taskInput = document.querySelector("#input-task").value;
    const descriptionInput = document.querySelector("#input-description").value;
    const categoryId = parseInt(document.querySelector("#categories").value);
    const phone = document.querySelector("#phone").value;
    postFetch(taskInput, descriptionInput, phone, categoryId);
}

function setCheckComplete(task, id, complete) {
    console.log(task, id, complete);
    task.complete = complete;
    const bodyData = { task: { task, complete } };
    fetch(endPoint + "/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
    }).then((response) => response.json())
}

function postFetch(task, description, phone, category_id) {
    console.log(task, description, phone, category_id);
    const bodyData = { task: { task, description, phone, category_id } };
    fetch(endPoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
    })
        .then((response) => response.json())
        .then((task) => {
            const taskData = task.data;
            let newTask = new Task(taskData, taskData.attributes);
            newTask.complete = false;
            const container = (document.querySelector("#tasks-container").innerHTML += newTask.renderTaskCard());
            window.location.reload();
        });

}

