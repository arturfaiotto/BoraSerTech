/*Informe, de forma decrescente todos os pares entre N (número fornecido pelo usuário) e -N.*/

const prompt = require("prompt-sync")({ signit: true });
let num = parseInt(prompt("Digite um número: "));

const int = (num * 2);

for (let cont = 0; cont <= int; cont++) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num = num - 1 
}
