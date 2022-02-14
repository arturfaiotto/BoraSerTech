const prompt = require("prompt-sync")({ signit: true });

const num = parseInt(prompt("digite um número: " ));

if (num >= 0) {
    console.log("Número POSITIVO");
} else {
    console.log("Número NEGATIVO")
}