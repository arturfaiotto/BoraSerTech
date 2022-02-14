const prompt = require("prompt-sync")({ signit: true });

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const numero = randomIntFromInterval(1,10);

do {
    var apostaUsuario = parseInt(prompt("Digite um número entre 1 e 10....   "))
    if (apostaUsuario !== numero) {
    apostaUsuario = parseInt("Tente novamente....   ");
    }
} while (apostaUsuario !== numero);

console.log("Parabéns! Você acertou!");