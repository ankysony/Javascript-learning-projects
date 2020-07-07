//Default UI elements
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
//load event listener
loadEventListeners();

function loadEventListeners()
{
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add task event
    form.addEventListener('submit', addTask);

    // Remove task events
    taskList.addEventListener('click', removeTask);

    // clear Task List
    clearBtn.addEventListener('click', clearTasks);

}

function getTasks()
{
    let tasks;
    if (localStorage.getItem('tasks') === null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));
    
    tasks.forEach(function (task) {
        // create li element
        const li = document.createElement('li');
        li.className = 'list-group-item list-group-item-success text-left';

        // create a text node and append it to the li'
        li.appendChild(document.createTextNode(task));

        // Create a new link element
        const link = document.createElement('a');

        // Add class
        link.className = 'delete-item text-right';

        link.innerHTML = '<i class="fa fa-remove"></i>';

        // Append the link to li

        li.appendChild(link);

        // Append the li to ul
        taskList.appendChild(li);
    });
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

    // store to local storage
    storeToLocal(taskInput.value);

    //clear the input 
    taskInput.value = '';

    e.preventDefault();
}

function storeToLocal(task)
{
    let tasks;
    if (localStorage.getItem('tasks') === null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));
    
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e)
{
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure'))
            e.target.parentElement.parentElement.remove();
        
        removeFromLocal(e.target.parentElement.parentElement);
    }
}

function removeFromLocal(taskItem)
{
    let tasks;
    if (localStorage.getItem('tasks') === null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));
    
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Task list
function clearTasks(e) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    document.querySelector('.card-action').style.display = 'none';
    clearTaskFromLS();
}

function clearTaskFromLS() {
    localStorage.clear();
}