const prompt = require("prompt-sync")({ signit: true });

const valor1 = parseFloat(prompt("digite um número: " ));
const valor2 = parseFloat(prompt("digite um número: " ));

const soma = (valor1 + valor2);
const subtra = (valor1 - valor2);
const mult = (valor1 * valor2);
const divis = (valor1 / valor2);

console.log("A Soma entre os valores é: " + soma)
console.log("A Subtração entre valores é: " + subtra)
console.log("A Multiplicação entre valores é: " + mult)
console.log("A Divisão entre os valores é: " + divis)
