/*Crie uma lista qualquer e faça um programa que imprima cada elemento da lista usando o for.*/

const tabela = [
    ["azul", "amarelo", "vermelho"],
    [1, 2, 3, 4, 5, 6],  
]

for (let linha = 0; linha < lista.length; linha++) {
    for (let coluna = 0; coluna < lista[linha].length; coluna++) {
    console.log(lista[linha][coluna]);
    }
}