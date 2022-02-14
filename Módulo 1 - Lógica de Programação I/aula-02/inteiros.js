/*Faça um algoritmo que receba três números inteiros e mostre o maior.deles.
Considere que os números sempre serão diferentes*/

const prompt = require("prompt-sync")({ signit: true });

const num1 = parseInt(prompt("Digite o 1º numero: " ));
const num2 = parseInt(prompt("Digite o 2º numero: " ));
const num3 = parseInt(prompt("Digite o 3º numero: " ));

if (num1 > num2 && num1 > num3) {
        console.log( num1 + " é o maior número!");
} else if (num2 > num1 && num2 > num3 ) {
        console.log( num2 + " é o maior número!");
} else {
        console.log( num3 + " é o maior número!");
} 

// /*A sintaxe Math.max retorna o número maior entre todas as variáveis.
// É uma maneira mais eficaz para resolver o problema*/

// console.log("O maior número é: " + Math.max(num1,num2,num3))