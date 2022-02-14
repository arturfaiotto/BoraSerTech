/*Faça um programa que escreva todos os números múltiplos de 7 entre 1 e N,
 sendo N um valor introduzido pelo usuário. Por exemplos: 7, 14, 21, 28, 35.*/

const prompt = require("prompt-sync")({ signit: true });
const num = parseInt(prompt("Digite um número : "));

let total = 0

for(let mult = 1; mult <= num; mult++) {
    total = mult * 7;
    console.log(total)
}