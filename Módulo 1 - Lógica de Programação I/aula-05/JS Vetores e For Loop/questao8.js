/*Faça um programa que dados dois vetores de mesmo tamanho, 
imprima o produto escalar entre eles.

OBS: produto escalar é a soma do resultado da multiplicação entre
o número na posição i do vetor1 pelo número na posição i do vetor2.*/

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7];

let resultado = 0;
let n1 = 0;
let n2 = 0;

for (let i = 0; i < arr1.length; i++) {
    n1 = arr1[i];
    n2 = arr2[i];
    resultado = ((n1 * n2) + (n2 * n1));
    console.log(resultado);

}
