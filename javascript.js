const tasklist = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        
        if (taskText.length > 35) {
            alert("Tarefas devem ter no máximo 35 caracteres.");
            return;
        }

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;

        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.classList.add("editButton");
        editButton.addEventListener("click", function () {
            editTask(span);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remover";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", function () {
            deleteTask(li);
        });

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        tasklist.appendChild(li);
        taskInput.value = ""; // Limpa o campo de input
    }
}

function editTask(span) {
    const newText = prompt("Editar tarefa:", span.textContent);
    if (newText !== null && newText.trim() !== "" && newText.length <= 35) {
        span.textContent = newText.trim();
    } else if (newText.length > 35) {
        alert("Tarefas devem ter no máximo 35 caracteres.");
    }
}

function deleteTask(li) {
    li.remove();
}
