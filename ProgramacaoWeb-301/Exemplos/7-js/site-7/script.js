function verificarNumero() {
  const input = document.getElementById("numero");
  const resultado = document.getElementById("resultado");
  const valor = Number(input.value);

  if (isNaN(valor)) {
    resultado.textContent = "Digite um número válido.";
    return;
  }

  if (valor === 0) {
    resultado.textContent = "O número é zero.";
  } else {
    if (valor % 2 === 0) {
      if (valor > 0) {
        resultado.textContent = "O número é par e positivo.";
      } else {
        resultado.textContent = "O número é par e negativo.";
      }
    } else {
      if (valor > 0) {
        resultado.textContent = "O número é ímpar e positivo.";
      } else {
        resultado.textContent = "O número é ímpar e negativo.";
      }
    }
  }
}
