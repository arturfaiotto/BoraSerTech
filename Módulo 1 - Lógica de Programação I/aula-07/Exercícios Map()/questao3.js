/*Analise o código a seguir:

let vetor = [5, 4, 3, 2, 1];

let resultado = vetor.map(produto);

Selecione a opção que não contém uma declaração válida da função passada como argumento para o map 
de forma que vetor resultando seja multiplicado por 10:*/

let vetor = [5, 4, 3, 2, 1];
let produto = (indice, valor) => valor*10; //declaração inválida
let resultado = vetor.map(produto);
console.log(resultado)