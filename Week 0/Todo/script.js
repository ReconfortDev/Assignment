const TodoList = []

const todosEl = document.getElementById("todos")
const todoForm = document.getElementById("todoForm")

if(TodoList.length <= 0 ) {
    todosEl.textContent = "No Todo inside";
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleValue = document.getElementById('title').value;
    const descValue = document.getElementById('description').value;
    const dateValue = document.getElementById('date').value;
    const indexValue = document.getElementById('index').value;

    if (indexValue === "") {
        addTodo(titleValue, descValue, dateValue);
    } else {
        updateTodo(indexValue, titleValue, descValue, dateValue);
    }

    resetForm();
    renderTodos();
});

function addTodo(title, description, date) {
    TodoList.push({ title, description, date, completed: false });
}

function updateTodo(index, title, description, date) {
    TodoList[index] = { ...TodoList[index], title, description, date };
}

function deleteTodo(index) {
    TodoList.splice(index, 1);
    renderTodos();
}

function editTodo(index) {
    const todo = TodoList[index];
    document.getElementById('title').value = todo.title;
    document.getElementById('description').value = todo.description;
    document.getElementById('date').value = todo.date;
    document.getElementById('index').value = index;
}

function renderTodos() {
    todosEl.innerHTML = '';
    if (TodoList.length === 0) {
        todosEl.textContent = "No Todo inside";
        return;
    }

    TodoList.forEach((todo, index) => {
        const todoEl = document.createElement('li');
        todoEl.style.backgroundColor = todo.completed ? 'red' : 'white';

        todoEl.innerHTML = `
            <div id="head">
                <span>
                    <input type="checkbox" ${todo.completed ? 'checked' : ''} onclick="toggleComplete(${index})">
                    <h3>${todo.title}</h3>
                </span>
                <span>${todo.date}</span>
            </div>
            <br>
            <span>
                <p>${todo.description}</p>
                <span>
                    <button onclick="editTodo(${index})">edit</button>
                    <button onclick="deleteTodo(${index})">delete</button>
                </span>
            </span>
        `;

        todosEl.appendChild(todoEl);
    });
}

function resetForm() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('date').value = '';
    document.getElementById('index').value = '';
}

function toggleComplete(index) {
    TodoList[index].completed = !TodoList[index].completed;
    renderTodos();
}

document.querySelector('.sort button:nth-child(1)').addEventListener('click', () => {
    TodoList.sort((a, b) => new Date(a.date) - new Date(b.date));
    renderTodos();
});

document.querySelector('.sort button:nth-child(2)').addEventListener('click', () => {
    TodoList.sort((a, b) => a.title.localeCompare(b.title));
    renderTodos();
});

renderTodos();