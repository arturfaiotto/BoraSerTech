/*Desafio 2 - Faça um programa como o do item anterior, porém que imprima a média sem considerar 
a maior e menor nota do aluno (nesse caso o número de provas precisa ser obrigatoriamente maior que dois).

Dica: crie uma cópia com a lista de todas as notas antes de fazer a média.*/

const prompt = require("prompt-sync")({ signit: true });

let somanotas = 0;
let somanotasinter = 0;
let provas = 0;
let arrnotas = [];
let arrnotasinter = [];
let validacao = false;

const nomealuno = prompt("Digite o nome do Aluno: ");
const idadealuno = parseInt(prompt("Digite a idade do Aluno: "));

while (validacao === false) {
    provas = parseInt(prompt("Quantas provas o Aluno fez? (Obrigatório ser maior que 2): "));   
    if (provas <= 2) {
        console.log("Obrigatório ser maior que 2.");
    } else {
        validacao = true;
    }
};

for (let i = 0; i < provas; i++) {
    const notas = parseFloat(prompt(`Qual a nota da ${i+1}ª prova?: `));
    if (notas >= 0 && notas <= 10) {
        arrnotas.push(notas);
        somanotas += arrnotas[i];
    } else {
        console.log("digite uma nota válida. Tente novamente");
        i--;
    }
}

arrnotas.sort((a, b) => a - b);
arrnotasinter = [...arrnotas];
arrnotasinter.pop();
arrnotasinter.shift();

for(let ii = 0; ii < arrnotasinter.length; ii++) {
    somanotasinter += arrnotasinter[ii];
}

const mediaaluno = (somanotasinter / arrnotasinter.length).toFixed(1);

if (mediaaluno >= 5) {
    aprovacao = true;
} else {
    aprovacao = false;
}

const infos = {
    nome : nomealuno,
    idade : idadealuno,
    notas : arrnotasinter,
    media : mediaaluno,
    aprovacao : aprovacao
}

console.log(infos);