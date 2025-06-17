// Seleciona o elemento com o ID "quadrado"
const quadrado = document.getElementById("quadrado");

//Vincula o listener de evento mouseover ao quadrado
quadrado.addEventListener("mouseover", function () {
  quadrado.style.backgroundColor = "red";
});

//Vincula o listener de evento mouseout ao quadrado
quadrado.addEventListener("mouseout", function () {
  quadrado.style.backgroundColor = "blue";
}); 

