// Pega os elementos do DOM
const btnMostrar = document.getElementById('mostrar');
const btnEsconder = document.getElementById('esconder');
const mensagem = document.getElementById('mensagem');

// Mostra a mensagem ao clicar
btnMostrar.addEventListener('click', function() {
  mensagem.classList.remove('oculto');
});

// Esconde a mensagem ao clicar
btnEsconder.addEventListener('click', function() {
  mensagem.classList.add('oculto');
});
