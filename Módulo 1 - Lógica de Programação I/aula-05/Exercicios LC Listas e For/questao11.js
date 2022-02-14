/*Faça um programa que peça as 4 notas bimestrais e mostre a média aritmética delas, usando listas.*/

const prompt = require("prompt-sync")({ signit: true });

const notas = [0];
let soma = 0;
let media = 0;

for (var i = 1; i <= 4; i++) {
    const nota = parseFloat(prompt("Digite a nota do " + i + "º bimestre: "));      
        do{
            if (nota >= 0 && nota <= 10) {
                notas.push(nota);
                soma += notas[i];
            } else {
                console.log("Nota inválida, digite novamente.")
                i--;
            } 
        } while (nota === true);
}

notas.shift()
media = (soma / notas.length)

console.log(media);