const prompt = require("prompt-sync")({ signit: true });
const num = parseInt(prompt("Digite a tabuada que deseja visualizar. (1 até 10): "));

let mult = 1

if (num >= 1 && num <= 10) {
    
    while (mult <= 10) {
        result = num * mult;
        console.log(num + " X " + mult + " = " + result);
        mult++;
    }
} else {
    console.log("Valor inválido!");
}