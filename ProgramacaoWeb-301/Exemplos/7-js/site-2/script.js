let contador = 0;

function atualizarContador() {
  document.getElementById("valor").textContent = contador;
}

function aumentar() {
  contador++;
  atualizarContador();
}

function diminuir() {
  contador--;
  atualizarContador();
}

// Captura pressionamento de tecla
document.addEventListener("keydown", function(evento) {
  if (evento.key === "+") {
    aumentar();
    
  } else if (evento.key === "-") {
    diminuir();
  }
});
