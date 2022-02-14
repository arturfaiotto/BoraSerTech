/*Agora usando a função max() faça um programa que imprima os
 três maiores números de uma lista.

Dica: Use o método próprio de listas .remove().*/

const array = [1, 25, 32, 46, 51, 634, 67, 788, 99, 170, 20, 310];

array.sort((a, b) => a - b);

console.log(array);

for (i = 0; i < 3; i++) {
    maior = Math.max(...array);
    console.log(maior)
    array.pop()
} 

console.log(array);