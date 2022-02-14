/*Faça um programa para perguntar 10 números e informar a soma total destes números.*/

const prompt = require("prompt-sync")({ signit: true });
let total = 0;

for (let cont = 1; cont <= 10; cont++) {
    const num = parseInt(prompt("Digite o " + cont + "º número : "));
    total += num;
}

console.log("A soma de todos os números digitados é: " + total);