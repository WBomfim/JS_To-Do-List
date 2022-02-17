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
  const addInput = document.createElement('div');
  addInput.id = 'inputs';
  body.appendChild(addInput);
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
