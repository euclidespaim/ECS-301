const tarefas = [
  "Estudar JavaScript",
  "Caminhar com o cachorro",
  "Regar as plantas",
  "Fazer almoço",
  "Ler um capítulo de um livro"
];

const lista = document.getElementById("lista-tarefas");

tarefas.forEach(function (tarefa, index) {
  const item = document.createElement("li");
  item.textContent = (index + 1) + ". " + tarefa;
  lista.appendChild(item);
});