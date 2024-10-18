// Get references to the DOM elements
const input = document.getElementById('input');
const addTaskButton = document.getElementById('add_task');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = input.value.trim(); // Get the input value and trim whitespace

    // Check if the input is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete'; // Add class for styling
    deleteButton.onclick = function() {
        todoList.removeChild(listItem); // Remove the task from the list
    };

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);
    // Append the list item to the todo list (unordered list)
    todoList.appendChild(listItem);
    
    // Clear the input field
    input.value = '';
}


// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Optional: Allow pressing Enter to add a task
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});