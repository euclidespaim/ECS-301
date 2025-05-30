function mostrarSaudacao() {
  const mensagem = document.getElementById("mensagem");
  const agora = new Date();
  const hora = agora.getHours();

  if (hora < 12) {
    mensagem.textContent = "São: " + hora + "hs Bom dia!";
  } else {
    if (hora < 18) {
      mensagem.textContent = "São: " + hora + "hs Boa tarde!";
    } else {
      mensagem.textContent = "São: " + hora + "hs Boa noite!";
    }
  }
}
