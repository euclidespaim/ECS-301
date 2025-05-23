function ligar() {
  document.getElementById("lampada").src = "img/acesa.png";
  document.getElementsByTagName("body")[0].style.backgroundColor = "white";
  document.getElementsByTagName("h1")[0].style.color = "black";
}

function desligar() {
  document.getElementById("lampada").src = "img/apagada.png";
  document.getElementsByTagName("body")[0].style.backgroundColor = "black";
  document.getElementsByTagName("h1")[0].style.color = "white";
}
