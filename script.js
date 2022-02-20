const tasksList = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');

function createTask() {
  if (input.value !== '') {
    const itemList = document.createElement('li');
    itemList.className = 'item-list';
    itemList.innerText = input.value;
    tasksList.appendChild(itemList);
    input.value = '';
  }
}

const listItem = document.getElementsByClassName('item-list');

function changeColorSelectedTask(event) {
  const eventSelect = event;
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].style.backgroundColor = '';
    eventSelect.target.style.backgroundColor = 'gray';
  }
}

function completedTask(event) {
  const eventCompleted = event;
  const classNameEvent = eventCompleted.target.className;
  if (classNameEvent === 'item-list') {
    eventCompleted.target.className = 'item-list completed';
  } else if (classNameEvent === 'item-list completed') {
    eventCompleted.target.className = 'item-list';
  }
}

const buttonClearSelected = document.querySelector('#remover-selecionado');

function clearTaskSelected() {
  const itemsListTask = document.querySelectorAll('.item-list');
  for (let index = 0; index < itemsListTask.length; index += 1) {
    if (itemsListTask[index].style.backgroundColor === 'gray') {
      tasksList.removeChild(itemsListTask[index]);
    }
  }
}

const buttonListUp = document.querySelector('#mover-cima');

// Pesquisado o funcionamento da função insertBefore() no W3 Schools.
// Link: https://www.w3schools.com/jsref/met_node_insertbefore.asp
function moveElementListUp() {
  const itemsList = document.getElementsByClassName('item-list');
  for (let index = 0; index < itemsList.length; index += 1) {
    if (itemsList[index].style.backgroundColor === 'gray' && index > 0) {
      return tasksList.insertBefore(itemsList[index], itemsList[index].previousElementSibling);
    }
  }
}

const buttonListDown = document.querySelector('#mover-baixo');

function moveElementListDown() {
  const itemsList = document.getElementsByClassName('item-list');
  for (let index = 0; index < itemsList.length; index += 1) {
    if (itemsList[index].style.backgroundColor === 'gray' && index < itemsList.length - 1) {
      return tasksList.insertBefore(itemsList[index].nextElementSibling, itemsList[index]);
    }
  }
}

const buttonClearAll = document.querySelector('#apaga-tudo');

function clearAllTasks() {
  if (tasksList.innerHTML !== '') {
    tasksList.innerHTML = '';
  }
}

// Resolvido com a ajuda do Matheus na mentoria, a função deletava apenas a metade da seleção.
const buttonClearCompleted = document.querySelector('#remover-finalizados');

function clearTaskCompleted() {
  const itemsListTask = document.querySelectorAll('.completed');
  for (let index = 0; index < itemsListTask.length; index += 1) {
    tasksList.removeChild(itemsListTask[index]);
  }
}

const buttonSave = document.querySelector('#salvar-tarefas');

function saveTasksList() {
  localStorage.setItem('taskList', tasksList.innerHTML);
}

function loadList() {
  const tasksLoad = localStorage.getItem('taskList');
  tasksList.innerHTML = tasksLoad;
}

window.onload = function loadingEvents() {
  loadList();
  button.addEventListener('click', createTask);
  tasksList.addEventListener('click', changeColorSelectedTask);
  tasksList.addEventListener('dblclick', completedTask);
  buttonClearSelected.addEventListener('click', clearTaskSelected);
  buttonListUp.addEventListener('click', moveElementListUp);
  buttonListDown.addEventListener('click', moveElementListDown);
  buttonClearAll.addEventListener('click', clearAllTasks);
  buttonClearCompleted.addEventListener('click', clearTaskCompleted);
  buttonSave.addEventListener('click', saveTasksList);
};
