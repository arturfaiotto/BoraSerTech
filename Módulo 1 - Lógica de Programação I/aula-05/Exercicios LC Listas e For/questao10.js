/*Pegue a lista gerada no exercício anterior e transforme cada um dos itens dessa lista em um float.

OBS: Não é para alterar o programa anterior, mas sim a lista gerada por ele.*/

const prompt = require("prompt-sync")({ signit: true });

const string = [];
const number = [];

for (i = 1; i <= 5; i++) {
    let num = prompt("Digite o " + i + " número: ");~
    string.push(num);
}

console.log(string);

for (ii = 0; ii < string.length; ii++) {
    number.push(parseFloat(string));
}
console.log(number);

