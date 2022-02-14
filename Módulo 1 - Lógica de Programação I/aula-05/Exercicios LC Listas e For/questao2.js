/*Crie uma lista qualquer e faça um programa que imprima cada elemento da lista usando o for.*/

const lista = [
    ["azul", "amarelo", "vermelho", "verde", "marrom", "roxo"],
    [1, 2, 3, 4, 5, 6],  
]

let linha = 0;
let coluna = 0;

while (linha < lista.length) {
    while (coluna < lista[linha].length) {
        console.log(lista[linha][coluna]);
        coluna++;
    }
    coluna = 0;
    linha++;
}
