const prompt = require("prompt-sync")({ signit: true });

const nota1 = parseFloat(prompt("digite a primeira nota: " ));
const nota2 = parseFloat(prompt("digite a segunda nota: " ));

const media = (nota1 + nota2) / 2

if (media >= 7) {
    console.log("A nota média do Aluno é: " + media + " - Aluno APROVADO"); 
} else {
    console.log("A nota média do Aluno é: " + media + " - Aluno REPROVADO"); 
}