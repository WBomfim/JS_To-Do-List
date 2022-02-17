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
