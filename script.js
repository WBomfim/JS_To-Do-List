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

const tasksList = document.querySelector('#lista-tarefas');

function createTask() {
  const input = document.querySelector('#texto-tarefa');
  const button = document.querySelector('#criar-tarefa');
  function createItemList() {
    if (input.value !== '') {
      const itemList = document.createElement('li');
      itemList.className = 'item-list';
      itemList.innerText = input.value;
      tasksList.appendChild(itemList);
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
    for (let index = 0; index < listItem.length; index += 1) {
      listItem[index].style.backgroundColor = '';
      eventSelect.target.style.backgroundColor = 'gray';
    }
  }
  tasksList.addEventListener('click', selectedTask);
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
  tasksList.addEventListener('dblclick', selectedTask);
}

completedTask();

function createDivButtonFunctions() {
  const body = document.querySelector('body');
  const addButtonsFunction = document.createElement('div');
  addButtonsFunction.id = 'buttonFunctions';
  body.appendChild(addButtonsFunction);
}

createDivButtonFunctions();

const divButtonFunctions = document.querySelector('#buttonFunctions');

function addButtonClearSelected() {
  const buttonClearSelected = document.createElement('button');
  buttonClearSelected.id = 'remover-selecionado';
  buttonClearSelected.innerText = 'X';
  divButtonFunctions.appendChild(buttonClearSelected);
}

addButtonClearSelected();

function clearTaskSelected() {
  const buttonClearSelected = document.querySelector('#remover-selecionado');
  function clearSelected() {
    const itemsListTask = document.querySelectorAll('.item-list');
    for (let index = 0; index < itemsListTask.length; index += 1) {
      if (itemsListTask[index].style.backgroundColor === 'gray') {
        tasksList.removeChild(itemsListTask[index]);
      }
    }
  }
  buttonClearSelected.addEventListener('click', clearSelected);
}

clearTaskSelected();

function addButtonListUp() {
  const buttonListUp = document.createElement('button');
  buttonListUp.id = 'mover-cima';
  buttonListUp.innerText = '↑';
  divButtonFunctions.appendChild(buttonListUp);
}

addButtonListUp();

// Pesquisado o funcionamento da função insertBefore() no W3 Schools.
// Link: https://www.w3schools.com/jsref/met_node_insertbefore.asp
function elementListUp() {
  const buttonListUp = document.querySelector('#mover-cima');
  function listUp() {
    const itemsList = document.getElementsByClassName('item-list');
    for (let index = 0; index < itemsList.length; index += 1) {
      if (itemsList[index].style.backgroundColor === 'gray' && index > 0) {
        return tasksList.insertBefore(itemsList[index], itemsList[index].previousElementSibling);
      }
    }
  }
  buttonListUp.addEventListener('click', listUp);
}

elementListUp();

function addButtonListDown() {
  const buttonListDown = document.createElement('button');
  buttonListDown.id = 'mover-baixo';
  buttonListDown.innerText = '↓';
  divButtonFunctions.appendChild(buttonListDown);
}

addButtonListDown();

function elementListDown() {
  const buttonListDown = document.querySelector('#mover-baixo');
  function listDown() {
    const itemsList = document.getElementsByClassName('item-list');
    for (let index = 0; index < itemsList.length; index += 1) {
      if (itemsList[index].style.backgroundColor === 'gray' && index < itemsList.length - 1) {
        return tasksList.insertBefore(itemsList[index].nextElementSibling, itemsList[index]);
      }
    }
  }
  buttonListDown.addEventListener('click', listDown);
}

elementListDown();

function addButtonClearCompleted() {
  const buttonClearCompleted = document.createElement('button');
  buttonClearCompleted.id = 'remover-finalizados';
  buttonClearCompleted.innerText = 'Remover Concluídos';
  divButtonFunctions.appendChild(buttonClearCompleted);
}

addButtonClearCompleted();

function addButtonClearAllTasks() {
  const buttonClearAll = document.createElement('button');
  buttonClearAll.id = 'apaga-tudo';
  buttonClearAll.innerText = 'Remover Lista';
  divButtonFunctions.appendChild(buttonClearAll);
}

addButtonClearAllTasks();

function clearAllTasks() {
  const buttonClearAll = document.querySelector('#apaga-tudo');
  function clearAll() {
    if (tasksList.innerHTML !== '') {
      tasksList.innerHTML = '';
    }
  }
  buttonClearAll.addEventListener('click', clearAll);
}

clearAllTasks();

// Resolvido com a ajuda do Matheus na mentoria, a função deletava apenas a metade da seleção.
function clearTaskCompleted() {
  const buttonClearCompleted = document.querySelector('#remover-finalizados');
  function clearCompleted() {
    const itemsListTask = document.querySelectorAll('.completed');
    for (let index = 0; index < itemsListTask.length; index += 1) {
      tasksList.removeChild(itemsListTask[index]);
    }
  }
  buttonClearCompleted.addEventListener('click', clearCompleted);
}

clearTaskCompleted();

function addButtonSave() {
  const buttonSave = document.createElement('button');
  buttonSave.id = 'salvar-tarefas';
  buttonSave.innerText = 'Salvar';
  divButtonFunctions.appendChild(buttonSave);
}

addButtonSave();

function saveTasksList() {
  const buttonSave = document.querySelector('#salvar-tarefas');
  function save() {
    localStorage.setItem('taskList', tasksList.innerHTML);
  }
  buttonSave.addEventListener('click', save);
}

saveTasksList();

window.onload = function loadList() {
  const tasksLoad = localStorage.getItem('taskList');
  tasksList.innerHTML = tasksLoad;
};
