const personagens = [];

document.getElementById("formPersonagem").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;

  personagens.push(nome);

  const li = document.createElement("li");
  li.textContent = nome;

  document.getElementById("listaPersonagens").appendChild(li);

  this.reset();
});
