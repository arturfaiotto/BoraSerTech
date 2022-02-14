/*Faça um algoritmo que peça para um usuário digitar um número e que 
só finaliza quando o usuário digitar 0.*/

const prompt = require("prompt-sync")({ signit: true });

while (numero !== 0) {
    var numero = parseInt(prompt("Digite qualquer número.... [0 para sair]:  "))
}

console.log("Finalizando o programa!");