/*Peça ao usuário para digitar um número e imprima o fatorial de n.*/

var total = 1
var i = 1

const prompt = require("prompt-sync")({ signit: true });
var num = parseInt(prompt("Digite um número: "));

while (i <= num) {
    total = total*i;
    i++;
}

console.log(total);