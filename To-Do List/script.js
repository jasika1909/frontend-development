function addTodo() {
    var input = document.getElementById("todo-input");
    var todoText = input.value.trim();

    if (todoText !== "") {
        var todoList = document.getElementById("todo-list");

        var todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");

        var checkboxWrapper = document.createElement("label");
        checkboxWrapper.classList.add("checkbox");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox-input");
        checkbox.id = "todo-item-" + Date.now();

        var checkmark = document.createElement("span");
        checkmark.classList.add("checkmark");

        checkboxWrapper.appendChild(checkbox);
        checkboxWrapper.appendChild(checkmark);

        var label = document.createElement("label");
        label.setAttribute("for", checkbox.id);
        label.textContent = todoText;

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            todoItem.remove();
        };

        todoItem.appendChild(checkboxWrapper);
        todoItem.appendChild(label);
        todoItem.appendChild(deleteBtn);

        todoList.appendChild(todoItem);

        input.value = ""; // Clear input after adding
    }
}
