/*Implemente um código para aprovar empréstimo bancário. 
O código deve pedir 3 informações: valor do empréstimo, número de parcelas e salário do solicitante. 
Aprovar empréstimo caso o valor das parcelas representem no máximo 30% do salário do solicitante.*/

const prompt = require("prompt-sync")({ signit: true });

const emprestimo = parseFloat(prompt("Digite o valor do emprestimo: " ));
const parcelas = parseInt(prompt("Digite o números de parcelas para pagamento: " ));
const salario = parseFloat(prompt("Digite o salário do solicitante: " ));

let vl_parcela = (emprestimo / parcelas);
let porcent = salario*0.3;

if (vl_parcela <= porcent) {
console.log("EMPRESTIMO APROVADO! O valor da parcela é: R$" + vl_parcela +",00 durante " + parcelas + " meses." );
} else {
console.log("EMPRESTIMO NEGADO! O valor da parcela é superior a 30% do seu salário.");
}

