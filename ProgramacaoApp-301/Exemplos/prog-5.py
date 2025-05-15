# Solicita a quantidade de produtos
quantidade = int(input("Digite a quantidade de produtos: "))

# Solicita o preço de cada produto
preco = float(input("Digite o preço de cada produto (em R$): "))

# Calcula o valor total
total = quantidade * preco

# Converte o total para string e exibe o resultado
print("O total da sua compra é R$ " + str(total) + ".")
