let totalCliques = 0;

const botaoClique = document.getElementById("botaoClique");

botaoClique.addEventListener("click", function () {
  totalCliques++;
  document.getElementById("contador").textContent = "Você clicou " + totalCliques + " vezes.";
});