function createReader() {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  body.appendChild(header);
}

createReader();

function addTitle() {
  const header = document.querySelector('header');
  const title = document.createElement('h1');
  title.innerText = 'Minha Lista de Tarefas';
  header.appendChild(title);
}

addTitle();

function addInstruction() {
  const header = document.querySelector('header');
  const instruction = document.createElement('p');
  instruction.id = 'funcionamento';
  instruction.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(instruction);
}

addInstruction();

function createDivInputs() {
  const body = document.querySelector('body');
  const addDiv = document.createElement('div');
  addDiv.id = 'inputs';
  body.appendChild(addDiv);
}

createDivInputs();

function addInputs() {
  const divInputs = document.querySelector('#inputs');
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.type = 'text';
  divInputs.appendChild(input);
}

addInputs();

function createDivTaskList() {
  const body = document.querySelector('body');
  const addList = document.createElement('div');
  addList.id = 'tarefas';
  body.appendChild(addList);
}

createDivTaskList();

function addTasksList() {
  const divTasks = document.querySelector('#tarefas');
  const tasksList = document.createElement('ol');
  tasksList.id = 'lista-tarefas';
  divTasks.appendChild(tasksList);
}

addTasksList();

function addButtonTasks() {
  const divInputs = document.querySelector('#inputs');
  const addButton = document.createElement('button');
  addButton.id = 'criar-tarefa';
  addButton.innerText = 'Adicionar';
  divInputs.appendChild(addButton);
}

addButtonTasks();

const taskList = document.querySelector('#lista-tarefas');

function createTask() {
  const input = document.querySelector('#texto-tarefa');
  const button = document.querySelector('#criar-tarefa');
  function createItemList() {
    if (input.value !== '') {
      const itemList = document.createElement('li');
      itemList.className = 'item-list';
      itemList.innerText = input.value;
      taskList.appendChild(itemList);
      input.value = '';
    }
  }
  button.addEventListener('click', createItemList);
}

createTask();

function changeColorSelectedTask() {
  const listItem = document.getElementsByClassName('item-list');
  function selectedTask(event) {
    const eventSelect = event;
    if (eventSelect.target.style.backgroundColor === '') {
      for (let index = 0; index < listItem.length; index += 1) {
        listItem[index].style.backgroundColor = '';
        eventSelect.target.style.backgroundColor = 'gray';
      }
    } else {
      eventSelect.target.style.backgroundColor = '';
    }
  }
  taskList.addEventListener('click', selectedTask);
}

changeColorSelectedTask();

function completedTask() {
  function selectedTask(event) {
    const eventCompleted = event;
    const classNameEvent = eventCompleted.target.className;
    if (classNameEvent === 'item-list') {
      eventCompleted.target.className = 'item-list completed';
    } else if (classNameEvent === 'item-list completed') {
      eventCompleted.target.className = 'item-list';
    }
  }
  taskList.addEventListener('dblclick', selectedTask);
}

completedTask();
