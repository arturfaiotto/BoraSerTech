/*Analise o código a seguir:

let vetor1 = [1, 2, 3, 4, 5];
let funcao = (valor, indice, vetor) => vetor[vetor.length-indice-1];

let vetor2 = vetor1.map(funcao);
console.log(vetor2);

Selecione a alternativa possui o valor correto de vetor2 impresso na tela:*/

let vetor1 = [1, 2, 3, 4, 5];
let funcao = (valor, indice, vetor) => vetor[vetor.length-indice-1];

let vetor2 = vetor1.map(funcao);
console.log(vetor2);