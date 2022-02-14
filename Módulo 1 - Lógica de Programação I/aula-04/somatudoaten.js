/*Peça ao usuário para digitar um número n e some todos os números de 1 a n.*/

const arr = []
var soma = 0;
var cont = 0;

const prompt = require("prompt-sync")({ signit: true });
const num = parseInt(prompt("Digite um número : "));

while (cont <= num) {
    arr.push(cont);
    soma += arr[cont];
    cont++;
}

console.log("A Soma de todos os números de 1 até " + num + " é: " + soma);