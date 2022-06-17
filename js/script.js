'use strickt';

let addBtn = document.querySelector('.add_task');
let todo = document.querySelector('.todo_list');
let taskInput = document.querySelector('.task_input');

let todoList = [];
todoList = JSON.parse(localStorage.getItem('todo'));
displayTasks();

addBtn.addEventListener('click', function(){

    let newMessage = {
        todo: taskInput.value,
        checked: false,
        important: false
    };

    todoList.push(newMessage);
    taskInput.value = '';
    displayTasks();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayTasks() {
    let displayTask = '';
    
    todoList.forEach(function(item,i){
        displayTask += `
            <li>
                <input type="checkbox" id="item_${i}" ${item.checked ? 'checked' : ''}>
                <label for="item_${i}">${item.todo}</label>
            </li>
        `;

        todo.innerHTML = displayTask;
        
    });
}

todo.addEventListener('change', function(event){
    let id = event.target.getAttribute('id');
    let label = todo.querySelector('[for=' + id + ']');
    let value = label.innerHTML;

    todoList.forEach(function(item) {
        if (item.todo === value) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });

});










































/* let addBtn = document.querySelector('.add_task'),
    taskInput = document.querySelector('.task_input'),
    todo = document.querySelector('.todo_list');


let todoList = [];

if(localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayTasks();
}

addBtn.addEventListener('click', function() {

    let newMessage = {
        todo: taskInput.value,
        checked: false,
        important: false
    };

    todoList.push(newMessage);
    displayTasks();
    localStorage.setItem('todo', JSON.stringify(todoList));
    taskInput.value = '';
});

    function displayTasks() {
        let displayTask = '';
        todoList.forEach(function(item, i) {
            displayTask += `
            <li>
                <input type='checkbox' id='task_${i}' ${item.checked ? 'checked' : ''}>
                <label for='task_${i}'>${item.todo}</label>
            </li>
        `;});

        todo.innerHTML = displayTask;

    } 

todo.addEventListener('change', function(event) {
    let idInput = event.target.getAttribute('id');
    let forLabel = todo.querySelector('[for=' + idInput + ']');
    let valueLabel = forLabel.innerHTML;
    
    todoList.forEach(item => {
        if(valueLabel === todoList.todo) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });


}); */