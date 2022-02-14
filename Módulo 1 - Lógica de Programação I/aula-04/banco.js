/*Faça um programa para simular uma situação simples de depósito, 
retirada e consulta em um banco. Exiba o seguinte menu com as opções:

1 - Depósito
2 - Retirada
3 - Saldo
4 - Sair do algoritmo

Se a escolha do usuário for depósito ou retirada, o algoritmo deverá pedir 
o valor da operação e atualizar automaticamente o valor existente na conta. 
O algoritmo deverá ser utilizado até que o usuário escolha a opção sair do algoritmo.*/

const prompt = require("prompt-sync")({ signit: true });

let saldo = 0;
let validacao = false;

console.log("Bem vindo ao banco XPTO!")

while (validacao === false) {

    do{
        
        console.log("1 - Depósito")
        console.log("2 - Saque")
        console.log("3 - Saldo")
        console.log("4 - Sair")

        var operacao = parseInt(prompt("Escolha uma operação:" ));

    } while (operacao !== 1 && operacao !== 2 && operacao !== 3 && operacao !== 4)


    if (operacao === 1) {
        const deposito = parseFloat(prompt("Digite o valor do deposito: " ));
        saldo = saldo + deposito;
        console.log("Seu novo saldo é de R$" + saldo);
        validacao = false;
    } else if (operacao === 2) {
        const saque = parseFloat(prompt("Digite o valor do saque: " ));
            if (saque > saldo) {
                console.log("Saldo insuficiente. Seu saldo é R$" + saldo + ". Operação não realizada.")
            } else {
                saldo = saldo - saque;
                console.log("Seu novo saldo é de R$" + saldo);
                validacao = false;
            }
    } else if (operacao === 3) {
        console.log("Seu saldo é de R$" + saldo);
        validacao = false;
    } else {
        console.log("Obrigado por utilizar nossos serviços.");
        validacao = true;
    }
   
}
