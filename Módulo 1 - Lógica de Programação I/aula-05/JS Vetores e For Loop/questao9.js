/* Faça um programa que, dadas dois vetores de mesmo tamanho, 
crie um novo vetor com cada elemento igual a soma dos elementos 
do vetor 1 com os do vetor 2, na mesma posição.

Exemplo:
Dadas vetor1 = [1, 4, 5] e vetor2 = [2, 2, 3], então vetor3 = [1+2, 4+2, 5+3] = [3, 6, 8]*/ 

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const arr3 = [];

let resultado = 0;
let n1 = 0;
let n2 = 0;

for (let i = 0; i < arr1.length; i++) {
    n1 = arr1[i];
    n2 = arr2[i];
    resultado = ( n1 + n2);
    arr3.push(resultado)
}

console.log(arr3); 