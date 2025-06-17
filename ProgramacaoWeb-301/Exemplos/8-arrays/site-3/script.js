// Exercício 1 — Usando push()

// Crie um array chamado compras que começa vazio. 
// Peça para o usuário digitar 3 itens de supermercado e 
// adicione esses itens no array usando o método push(). 
// Ao final, exiba na tela a lista completa de compras.

lista = []

let item1 = prompt("Digite um item de supermercado: ");
lista.push(item1)

let item2 = prompt("Adicione mais um item: ")
lista.push(item2)

let item3 = prompt("Adicione mais um item: ")
lista.push(item3)


console.log("Sua lista de compras: ", compras)