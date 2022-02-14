/*Faça um programa que, dadas duas listas de mesmo tamanho,
 crie uma nova lista com cada elemento igual a soma dos elementos da lista 1 com os da lista 2, na mesma posição.

Exemplo:
Dadas lista1 = [1, 4, 5] e lista2 = [2, 2, 3], então lista3 = [1+2, 4+2, 5+3] = [3, 6, 8]*/

const lista1 = [1, 2, 3, 4, 5]
const lista2 = [5, 4, 3, 2, 1]
const lista3 = []

for (i = 0; i < lista1.length; i++ ) {
    let n1 = lista1[i];
    let n2 = lista2[i];
    let resultado = n1 + n2;
    lista3.push(resultado);
}

console.log(lista3);