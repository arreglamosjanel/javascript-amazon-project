const todoList = [{
  name: 'make dinner', 
  dueDate: '2026-05-27'
}, {
  name: 'wash dishes',
  dueDate: '2026-06-27'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  //this technic is called- Generating the HTML
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;  //This is called DESTRUCTURING from above
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement =  document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
 
  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate // The same as above
  });

  inputElement.value = '';

  renderTodoList();
}