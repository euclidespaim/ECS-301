const personagens = [];

document.getElementById("formPersonagem").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const classe = document.getElementById("classe").value;
  const forca = document.getElementById("forca").value;
  const imagem = document.getElementById("imagem").value;

  const novoPersonagem = {
    nome: nome,
    classe: classe,
    forca: Number(forca),
    imagem: imagem
  };

  personagens.push(novoPersonagem);
  mostrarPersonagens();
  this.reset();
});

function mostrarPersonagens() {
  const lista = document.getElementById("listaPersonagens");
  lista.innerHTML = "";

  personagens.forEach(personagem => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${personagem.imagem}" alt="${personagem.nome}">
      <p><strong>Nome:</strong> ${personagem.nome}</p>
      <p><strong>Classe:</strong> ${personagem.classe}</p>
      <p><strong>Força:</strong> ${personagem.forca}</p>
    `;

    lista.appendChild(card);
  });
}
