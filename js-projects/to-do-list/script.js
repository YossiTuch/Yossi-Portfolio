const todoInput = document.getElementById('todo-input');
const listContainer = document.getElementById('list-container');
const addButton = document.getElementById('add-button');

const addTodo = () => {
  if (todoInput.value === '') {
    alert('Type a Todo');
    return;
  }
  const li = document.createElement('li');
  li.textContent = todoInput.value;
  listContainer.appendChild(li);
  const span = document.createElement('span');
  span.innerHTML = '\u00d7';
  li.appendChild(span);
  todoInput.value = '';
  saveData();
};

addButton.addEventListener('click', addTodo);

listContainer.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
  }
  saveData();
});

const saveData = () => {
  localStorage.setItem('data', listContainer.innerHTML);
};

const loadData = () => {
  listContainer.innerHTML = localStorage.getItem('data');
};

loadData();