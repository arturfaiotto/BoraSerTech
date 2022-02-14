const prompt = require("prompt-sync")({ signit: true });

const num = parseInt(prompt("digite um número: " ));

if (num % 2 === 0) {
    console.log("Número " + num + " é PAR");
} else {
    console.log("Número " + num + " é IMPAR");
}