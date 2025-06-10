// Seleciona os botões pelo ID
const btnVermelho = document.getElementById('vermelho');
const btnVerde = document.getElementById('verde');
const btnAzul = document.getElementById('azul');

// Adiciona um "escutador de eventos" de clique para cada botão
btnVermelho.addEventListener('click', function() {
  document.body.style.backgroundColor = 'red';
});

btnVerde.addEventListener('click', function() {
  document.body.style.backgroundColor = 'green';
});

btnAzul.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});
