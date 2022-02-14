const prompt = require("prompt-sync")({ signit: true });

const valor1 = parseFloat(prompt("digite um número: " ));
const valor2 = parseFloat(prompt("digite um número: " ));

const media = (valor1 + valor2) / 2.0

console.log (media)

