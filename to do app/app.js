//Define our UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all the event listeners

loadEventListeners();

function loadEventListeners()
{
    //add task event
    form.addEventListener('submit', addTask);

    // Remove task events
    taskList.addEventListener('click', removeTask);

    //clear task list
    clearBtn.addEventListener('click', clearTasks);

    //filter the tasks
    filter.addEventListener('keyup', filterTasks);
}

//Add Task
function addTask(e)
{
    if (taskInput.value === '')
    {
        alert('Add a task'); 
    }
    //create li element
    const li = document.createElement('li');

    //add a class
    li.className = 'collection-item';

    // create a text node and append it to the li'
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a new link element
    const link = document.createElement('a');

    // Add class
    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"></i> ';

    // Append the link to li

    li.appendChild(link);
     
    // Append the li to ul
    
    taskList.appendChild(li);
    
    //clear the input 
    taskInput.value = '';
     
    e.preventDefault();
}

// Remove Task
function removeTask(e)
{
    if (e.target.parentElement.classList.contains('delete-item'))
    {
        if(confirm('Are you sure'))
        e.target.parentElement.parentElement.remove();
    }

}

// Clear Task list
function clearTasks(e)
{
    while (taskList.firstChild)
    {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks

function filterTasks(e)
{
    const text = e.target.value.toLowerCase();
    console.log(text); 
    document.querySelectorAll('.collection-item').forEach
        (function (task) {
            const item = task.fristChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1)
                task.style.display = 'block';
            else
                task.style.display = 'none';
        });
}