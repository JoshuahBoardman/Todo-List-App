const form = document.getElementById("todo-form");
const newTodo = document.getElementById("user-input");
const addTodo = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", e => {
    e.preventDefault();

    const userInput = newTodo.value;

    if( userInput === "" || userInput === null || userInput === undefined) return;

    const listItem = document.createElement('li');

    listItem.classList.add("todo-item");
    listItem.innerHTML = `
    <span class="todo-item-text">${userInput}</span>
    <button class="btn">
        <i class="fas fa-times delete"></i>
    </button>
    `;

    todoList.append(listItem);

    newTodo.value = '';
});

todoList.addEventListener("click", e => {
    if(e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
});