/*Faça um programa que imprima o maior número de uma lista, sem usar a função max().*/

const lista = [21, 22, 23, 24, 25, 26, 27, 89, 29, 30]

lista.sort((a, b) => b - a)

// console.log(lista[0])

console.log("O maior número da lista é: " + lista[0]);