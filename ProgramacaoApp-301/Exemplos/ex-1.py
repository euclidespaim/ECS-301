# Criar um progrma que peça ao usuário a altura e o peso e calcule o imc
# IMC = peso / (altura * altura)
# IMC = peso / (altura ** 2)

peso = float(input("Digite seu peso em kg: "))
altura = float(input("Digite sua altura em metros: "))

imc = peso / (altura ** 2)

print(f"Seu IMC é: {imc}")