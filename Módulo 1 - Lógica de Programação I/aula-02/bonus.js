/*A empresa XKW concedeu um bônus de 20% do valor do salário a todos os funcionários
 com tempo de trabalho na empresa igual ou superior a 5 anos e de 10% aos demais.
 Faça um algoritmo que receba o salário e o tempo de serviço de um funcionário, 
 calcule e mostre o valor do bônus recebido por ele.
 */

const prompt = require("prompt-sync")({ signit: true });

const salario = parseFloat(prompt("Digite o salario do funcionário: " ));
const tempo = parseInt(prompt("Digite o tempo de empresa do funcionário (anos): " ));

if (tempo >= 5) {
    const bonus = (salario + salario * 0.20);
    console.log("O funcionário tem " + tempo + " anos ou mais de empresa, portanto receberá um bonus de 20%.");
    console.log("Seu novo salário é: " + bonus);
} else {
    const bonus = (salario + salario * 0.10);
    console.log("O funcionário tem " + tempo + " anos de empresa, portanto receberá um bonus de 10%.");
    console.log("Seu novo salário é: " + bonus);
}
