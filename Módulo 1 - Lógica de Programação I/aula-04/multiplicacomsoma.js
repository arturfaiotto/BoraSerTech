/*Faça a multiplicação entre dois números usando somente soma.*/

const prompt = require("prompt-sync")({ signit: true });
const num1 = parseInt(prompt("Digite um número : "));
const num2 = parseInt(prompt("Digite um número : "));

let resp = 0

for(let cont = 1; cont <= num1; cont++) {
    resp = resp + num2;
}

console.log("A multiplicação de " + num1 + " com " + num2 + "é: " + resp);