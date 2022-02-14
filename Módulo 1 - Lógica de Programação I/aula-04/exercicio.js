/*Crie um código que leia 10 valores inteiros e:
• Encontre e mostre o maior valor
• Encontre e mostre o menor valor
• Calcule e mostre a média dos números lidos*/

const arr = [];
var soma = 0;

const prompt = require("prompt-sync")({ signit: true });

for (var repet = 1; repet <= 10; repet++) {
    const num = parseInt(prompt("Digite o " + repet + "º número: "));
    arr.push(num);
}

for (var cont = 0; cont < 10; cont++) {
    soma = soma + arr[cont];
    console.log(soma)
}

console.log("Você digitou esses valores: ");
console.log(arr);

const maior = Math.max(...arr);
const menor = Math.min(...arr);
const media = parseFloat(soma / cont).toFixed(1);

console.log("O maior valor é " + maior + ".");
console.log("O menor valor é " + menor + ".");
console.log("A média dos valores é " + media + ".");

/*O … antes dao array é o spred operator. Este operador faz com os itens sejam enviados 
um a um, podendo assim o JS definir qual é o maior e o menor número do array alvo*/
