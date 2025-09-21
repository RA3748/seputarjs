const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list'); // Kita bikin li nya disini

let arrayTodo = ['mandi', 'makan', 'school']; // todo wajib langsung ada

//eksekusi todo wajib
for(let i = 0; i < arrayTodo.length; i++) {
    CreateList(arrayTodo[i]);
}

function CreateTodo() {

    let text = todoInput.value;

    if (!text == '') {

        if (text.length < 25) {

            CreateList(text);

            arrayTodo.push(text);

            todoInput.value = '';

        } else {
            alert('Text tidak boleh lebih dari 25 karakter!');
        }

    } else {
        alert('Text tidak boleh kosong!');
    }
    return 1;

}

function CreateList(text) {

    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let Delete = document.createElement('button');
    let span = document.createElement('span');

    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${text}`;
    Delete.className = 'delete-btn';
    Delete.innerText = 'Delete'
    span.innerText = text;

    Delete.onclick = () => li.remove();

    checkbox.addEventListener('change', () => {
        if (li.className == '') {
            li.className = 'done';
        } else {
            li.className = '';
        }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(Delete);

    todoList.appendChild(li);
    return 1;

}