/*Faça um programa, usando loops, que peça para um usuário digitar 
um número e que só finaliza quando o usuário digitar 0. 
Ao final imprima a soma de todos os números digitados*/

const prompt = require("prompt-sync")({ signit: true });

let total = 0;

while (numero !== 0) {
    var numero = parseInt(prompt("Digite qualquer número....  "))
    total += numero;
}

console.log("Soma de todos os números é: " + total)
console.log("Finalizando o programa!");