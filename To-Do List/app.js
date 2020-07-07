//Default UI elements
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
//load event listener
loadEventListeners();
console.log(taskList);
function loadEventListeners()
{
    // Add task event
    form.addEventListener('submit', addTask);

    // Remove task events
    taskList.addEventListener('click', removeTask);

    // clear Task List
    clearBtn.addEventListener('click', clearTasks);

}

function addTask(e)
{
    document.querySelector('.card-action').style.display = 'block';
    if (taskInput.value === '')
    {
        alert('Add a task');
    }
    // create li element
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-success text-left';

    // create a text node and append it to the li'
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a new link element
    const link = document.createElement('a');

    // Add class
    link.className = 'delete-item text-right';

    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the link to li

    li.appendChild(link);

    // Append the li to ul
    taskList.appendChild(li);

    //clear the input 
    taskInput.value = '';

    e.preventDefault();
}

function removeTask(e)
{
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure'))
            e.target.parentElement.parentElement.remove();
    }
}

// Clear Task list
function clearTasks(e) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    document.querySelector('.card-action').style.display = 'none';
}