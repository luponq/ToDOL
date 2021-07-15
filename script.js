let addMessege = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

let todoList = [];

addButton.addEventListener('click', function(){
    let newTodo = {
        todo: addMessege.nodeValue,
        checked: false,
        important: false
    }
});

todoList.push(newTodo);
displayMesages();


function displayMesages(){
    let displayMesage = ''
    todoList.forEach(function(icon, i){
        displayMesage += `
        <li>
            <input type='checkbox' id='item_${i}'>
            <label for='item_${i}'>${item.todo}</label>    
        </li>
        `;
        todo.innerHTML = displayMesage;
});

}