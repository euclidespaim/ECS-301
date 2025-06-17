const input = document.getElementById('texto');
const contador = document.getElementById('contador');

input.addEventListener('input', function() {
  contador.innerText = input.value.length;
});

