/*Escreva um código que simule uma calculadora básica, 
provendo a leitura de um valor, seguido da operação(+, -, * e /) 
e do segundo valor.*/

console.log("Bem vindo a operadora básica!")

const prompt = require("prompt-sync")({ signit: true });
const n1 = parseInt(prompt("Digite o primeiro número: " ));
const ope = prompt("Digite a operação desejada: " );
const n2 = parseInt(prompt("Digite o primeiro número: " ));

if (ope === "+" || ope === "-" || ope === "/" || ope === "*") {

    switch (ope) {
        case "+":
        let soma = n1 + n2;
            console.log("A SOMA de " + n1 + " e " + n2 + " resulta em: " + soma + ".");
            break;
        case "-":
        let subt = n1 - n2;
            console.log("A SUBTRAÇÃO de " + n1 + " e " + n2 + " resulta em: " + subt + ".");
            break;
        case "*":
        let multi = n1 * n2;
            console.log("A MULTIPLICAÇÃO de " + n1 + " e " + n2 + " resulta em: " + multi + ".");
            break;
        case "/":
        let divisao = n1 / n2;
            console.log("A DIVISÃO de " + n1 + " e " + n2 + " resulta em: " + divisao + ".");
            break;
    }

} else {
     console.log("A operação matemática não é suportada!");
}

