/*Desafio 1 - Faça um programa que peça para o usuário digitar o nome e a idade de um aluno 
e o número de provas que esse aluno fez. Depois, o programa deve pedir para o usuário digitar 
as notas de cada prova do aluno. Ao final o programa deve imprimir uma lista contendo:

a. Nome do aluno na posição 0;
b. Idade do aluno na posição 1;
c. Uma lista com todas as notas na posição 2;
d. A média do aluno na posição 3;
e. True ou False, caso a média seja maior que 5 ou não, na posição 4.

Dica: Use o que você fez nos exercícios anteriores para criar esse programa.*/

const prompt = require("prompt-sync")({ signit: true });

let somanotas = 0;
let mediaaluno = 0;
const arrnotas = [];

const nomealuno = prompt("Digite o nome do Aluno: ");
const idadealuno = parseInt(prompt("Digite a idade do Aluno: "));

const provas = parseInt(prompt("Quantas provas o Aluno fez?: "));

for (i = 0; i < provas; i++) {
    const notas = parseFloat(prompt(`Qual a nota da ${i+1}ª prova?: `));
    if (notas >= 0 && notas <= 10) {
        arrnotas.push(notas);
        somanotas += arrnotas[i];
    } else {
        console.log("digite uma nota válida. Tente novamente");
        i--;
    }
}

mediaaluno = (somanotas / arrnotas.length).toFixed(1);
console.log (mediaaluno)

if (mediaaluno >= 5) {
    aprovacao = true;
} else {
    aprovacao = false;
}

const infos = {
    nome : nomealuno,
    idade : idadealuno,
    notas : arrnotas,
    media : mediaaluno,
    aprovacao : aprovacao
}

console.log(infos);