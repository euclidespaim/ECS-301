let frutas = ["maçã", "banana", "laranja", "uva"];

console.log("Lista original:");
console.log(frutas);

// Inserir "abacaxi" na posição 2 (índice 2)
frutas.splice(2, 0, "abacaxi");

console.log("Depois de adicionar 'abacaxi' na posição 2:");
console.log(frutas);

// Remover o item da posição 3 (índice 3)
let removido = frutas.splice(3, 1);

console.log(`Fruta removida: ${removido}`);
console.log("Lista atualizada:");
console.log(frutas);
