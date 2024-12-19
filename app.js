// DOM elements
const todoInput = document.getElementById('todoInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');

// Event listener to add new task
addTaskBtn.addEventListener('click', addTask);

// Function to add task
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a checkbox to mark task as complete
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Create a delete button to remove task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Append buttons and list item to the <li>
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Append the new task to the list
    todoList.appendChild(li);

    // Clear input field
    todoInput.value = '';
}
