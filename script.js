function addTitle() {
  const header = document.querySelector('header');
  const title = document.createElement('h1');
  title.innerText = 'Minha Lista de Tarefas';
  header.appendChild(title);
}

addTitle();
