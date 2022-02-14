//Escreva um código que imprima um mês de acordo com o número digitado pelo usuário.

const prompt = require("prompt-sync")({ signit: true });
const meses = parseInt(prompt("Digite o número que correnponde a um mês: " ));

switch (meses) {
    case 1:
        console.log("O número " + meses + " corresponde ao mês de Janeiro.");
        break;
    case 2:
        console.log("O número " + meses + " corresponde ao mês de Fevereiro.");
        break;
    case 3:
        console.log("O número " + meses + " corresponde ao mês de Março.");
        break;
    case 4:
        console.log("O número " + meses + " corresponde ao mês de Abril.");
        break;
    case 5:
        console.log("O número " + meses + " corresponde ao mês de Maio.");
        break;
    case 6:
        console.log("O número " + meses + " corresponde ao mês de Junho.");
        break;
    case 7:
        console.log("O número " + meses + " corresponde ao mês de Julho.");
        break;
    case 8:
        console.log("O número " + meses + " corresponde ao mês de Agosto.");
        break;
    case 9:
        console.log("O número " + meses + " corresponde ao mês de Setembro.");
        break;
    case 10:
        console.log("O número " + meses + " corresponde ao mês de Outubro.");
        break;
    case 11:
        console.log("O número " + meses + " corresponde ao mês de Novembro.");
        break;
    case 12:
        console.log("O número " + meses + " corresponde ao mês de Dezembro.");
        break;
    default:
        console.log("O número " + meses + " não corresponde a um mês.");
        break;
}

