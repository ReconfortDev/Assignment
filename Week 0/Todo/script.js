const Todos = []

const addTodo = (e) => {
    const title = document.querySelector('#title').value
    const description = document.querySelector('#description').value
    e.preventDefault()
    console.log(title, description)
    Todos.push({title, description})
    // console.log(Todos)
    displayTodos();
}

const markCompleted = (index) => {
    Todos[index].completed = !Todos[index].completed;
    displayTodos();
};


const displayTodos = () => {
    const todosContainer = document.querySelector('#todos');
    todosContainer.innerHTML = ''; // Clear the list before adding todos

    Todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = `${index + 1}. ${todo.title}: ${todo.description}`;
        if (todo.completed) {
            todoItem.classList.add('completed');
        }

        const completeButton = document.createElement('button');
        completeButton.textContent = todo.completed ? 'Unmark' : 'Complete';
        completeButton.addEventListener('click', () => markCompleted(index));

        todoItem.appendChild(completeButton);
        todosContainer.appendChild(todoItem);
    });
}

document.querySelector('#todoForm').addEventListener('submit', addTodo);