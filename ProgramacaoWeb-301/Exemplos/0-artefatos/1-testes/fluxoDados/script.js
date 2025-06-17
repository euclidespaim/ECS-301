let etapa = 0;

function proximoPasso() {
  etapa++;
  switch (etapa) {
    case 1:
      moverParaVariavel();
      break;
    case 2:
      moverParaArray();
      break;
    case 3:
      moverParaForEach();
      break;
    case 4:
      moverParaDOM();
      break;
    default:
      alert('Animação concluída!');
      break;
  }
}

function moverParaVariavel() {
  const valor = document.getElementById('valor');
  const variavelBox = document.getElementById('variavelBox');
  const codigo = document.getElementById('codigo');

  const end = variavelBox.getBoundingClientRect();

  codigo.textContent = 'const novaTarefa = input.value;';

  anime({
    targets: valor,
    left: `${end.left + 40}px`,
    duration: 1000,
    easing: 'easeInOutQuad',
    complete: () => {
      destaque(variavelBox);
    }
  });
}

function moverParaArray() {
  const valor = document.getElementById('valor');
  const arrayBox = document.getElementById('arrayBox');
  const codigo = document.getElementById('codigo');

  const end = arrayBox.getBoundingClientRect();

  codigo.textContent = 'tarefas.push(novaTarefa);';

  anime({
    targets: valor,
    left: `${end.left + 40}px`,
    duration: 1000,
    easing: 'easeInOutQuad',
    complete: () => {
      destaque(arrayBox);
    }
  });
}

function moverParaForEach() {
  const valor = document.getElementById('valor');
  const foreachBox = document.getElementById('foreachBox');
  const codigo = document.getElementById('codigo');

  const end = foreachBox.getBoundingClientRect();

  codigo.textContent = 'tarefas.forEach(function(tarefa) { ... });';

  anime({
    targets: valor,
    left: `${end.left + 40}px`,
    duration: 1000,
    easing: 'easeInOutQuad',
    complete: () => {
      destaque(foreachBox);
    }
  });
}

function moverParaDOM() {
  const codigo = document.getElementById('codigo');
  const ul = document.getElementById('lista');
  const li = document.createElement('li');
  li.textContent = 'Ler livro';
  ul.appendChild(li);

  codigo.textContent = 'li.textContent = tarefa; ul.appendChild(li);';

  anime({
    targets: li,
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 600,
    easing: 'easeOutBounce'
  });
}

function destaque(elemento) {
  anime({
    targets: elemento,
    backgroundColor: '#fff176',
    duration: 300,
    direction: 'alternate'
  });
}
