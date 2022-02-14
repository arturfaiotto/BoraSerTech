/*Faça um programa que peça para o usuário digitar a idade, o salário e 
o sexo de uma pessoa até que as entradas digitadas sejam válidas:
Idade: entre 0 e 150;
Salário: maior que 0;
Gênero: M, F ou Outro.*/

const prompt = require("prompt-sync")({ signit: true });

do {
    
    var idade = parseInt(prompt("Digite a idade: "));
    while (idade > 150 || idade < 0){
        idade = parseInt(prompt("Digite a idade: "));
    }

    var salario = parseInt(prompt("Digite o salário: "));
    while (salario <= 0){
        salario = parseInt(prompt("Digite o salário: "));
    }

    do {
        var genero = prompt("Digite o gênero (F,M,O): ").toUpperCase();
        if (genero === "F" || genero === "M" || genero === "O") {
            console.log("Parabéns pamâmetros corretos!");
            validacao1 = true; 
        } else {
            validacao1 = false;
        } 
    } while (validacao1 === false);

    var exit = prompt("Deseja continuar? (S/N) ").toUpperCase();
    if (exit === "S" ) {
        validacao2 = true;
    } else if (exit === "N"){
        validacao2 = false;
    } else {
        validacao2 = false;
    }
 
} while (validacao2 === true);

console.log("Obrigado!!!");


















// do {
//     const idade = parseInt(prompt("Digite a idade: "));
//     if (idade >= 0 && idade <= 150) {
//         const salario = parseInt(prompt("Digite o salário: "));
//         if (salario > 0) {
//             const genero = (prompt("Digite o gênero (F,M,O): "));
//             if (genero === "F" || genero === "M" || genero === "O") {
//                 console.log ("Parabéns pamâmetros corretos!")

//                 var sair = (prompt("Deseja sair do programa? (S/N) "));
                
//             } else {
//                 console.log("Genero Inválido. Utiliza F, M ou O.");
//             }
//         } else {
//             console.log("Salário Inválido. è necessário ser maior que 0.");
//         }
//     } else {
//         console.log("Idade Inválida.");
//     }
// } while (sair === "S")

// console.log("Obrigado!!")
