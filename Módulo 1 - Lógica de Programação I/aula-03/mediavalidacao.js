/*Crie um código que recebe 3 notas de um aluno entre 0 e 10 e calcule a média.

Se a média for menor que 5 exiba na tela que esse aluno está reprovado, 
caso a nota seja maior ou igual a 5 exiba que ele foi aprovado.

Coloque validação se o usuário preencheu todas as notas e se elas estão entre 0-10, 
se uma dessas regras de validação não for cumprida, peça para ele começar novamente.*/

console.log("Bem vindo ao sistema de avaliação de médias.");

const prompt = require("prompt-sync")({ signit: true });

const nota1 = parseFloat(prompt("digite a primeira nota: " ));
if (nota1 >= 0 && nota1 <= 10) {
        const nota2 = parseFloat(prompt("digite a segunda nota: " ));
        if (nota2 >= 0 && nota2 <= 10) {
                    const nota3 = parseFloat(prompt("digite a terceira nota: " ));
                    if (nota3 >= 0 && nota3 <= 10) {

                    const media = parseFloat((nota1 + nota2 + nota3) / 3).toFixed(2);
                                    
                    if (media < 5) {
                        console.log ("Aluno Reprovado, sua média é: " + media);
                    } else if (media >= 5) {
                        console.log("Aluno Aprovado, sua média é: "+ media);
                    } 
                        
                } else {
                    console.log("A nota digitada está incorreta. Tente novamente!");
                }
        } else {
            console.log("A nota digitada está incorreta. Tente novamente!");
        }  
} else {
    console.log("A nota digitada está incorreta. Tente novamente!");
}