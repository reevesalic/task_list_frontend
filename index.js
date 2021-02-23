const endPoint = "http://localhost:3000/api/v1/tasks";
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is Loaded");
    getTasks();

    const createTaskForm = document.querySelector("#create-task-form");

    createTaskForm.addEventListener("submit", (e) => createFormHandler(e));
});
// fetch and load task list
function getTasks() {
    fetch(endPoint)
        .then((response) => response.json())
        .then((tasks) => {
            tasks.data.forEach((task) => {
                let newTask = new Task(task, task.attributes);
                document.querySelector("#tasks-container").innerHTML += newTask.renderTaskCard();

                //delete button and display message.
                const matches = document.querySelector("#tasks-container").querySelectorAll(".delete");
                matches.forEach((button, index) => {
                    button.onclick = (e) => {
                        const filteredItems = tasks.data.filter((x) => x.id !== index);
                        tasks.data = filteredItems;

                        fetch(`http://localhost:3000/api/v1/tasks/${button.dataset.id}`, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(task),
                        });
                        window.location.reload();
                    };
                });
                //checkbox
               //  const matches = document.querySelector("#tasks-container").querySelectorAll(".complete");
               //  matches.forEach((checkbox, index) => {
               //      checkbox.onclick = (e) => {
               //          const filteredItems = tasks.data.filter((x) => x.id !== index);
               //          tasks.data = filteredItems;

               //          fetch(`http://localhost:3000/api/v1/tasks/${checkbox.dataset.id}`, {
               //              method: "POST",
               //              headers: {
               //                  "Content-Type": "application/json",
               //              },
               //              body: JSON.stringify(task),
               //          });
               //          window.location.reload();
               //      };
               //  });
            });
        });
}

function createFormHandler(e) {
    e.preventDefault();
    const taskInput = document.querySelector("#input-task").value;
    const descriptionInput = document.querySelector("#input-description").value;
    const categoryId = parseInt(document.querySelector("#categories").value);
    postFetch(taskInput, descriptionInput, categoryId);
}
function postFetch(task, description, category_id) {
    console.log(task, description, category_id);
    const bodyData = { task: { task, description, category_id } };
    fetch(endPoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
    })
        .then((response) => response.json())
        .then((task) => {
            const taskData = task.data;
            let newTask = new Task(taskData, taskData.attributes);
            const container = (document.querySelector("#tasks-container").innerHTML += newTask.renderTaskCard());
            const matches = document.querySelectorAll(".delete");
            matches.forEach((item) => {
                item.onclick = function () {
                    alert("deleted!");
                };
            });
        });

   

    //delete task
    function removeTask(task) {
        task.parentNode.removeChild(task);
    }
}
