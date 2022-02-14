/*Faça um programa que sorteie 10 números entre 0 e 100 e imprima:

a. o maior número sorteado;
b. o menor número sorteado;
c. a média dos números sorteados;
d. a soma dos números sorteados.*/

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const arr = []
let soma = 0

for (i = 0; i < 10; i++) {
const numero = randomIntFromInterval(1,100);
// console.log (numero); //validação do intervalo
    arr.push(numero);
    soma += arr[i];
}

let maior = Math.max(...arr);
let menor = Math.min(...arr);

console.log(arr)
console.log(`O maior número sorteador foi: ${maior}, o menor número foi ${menor}.\n A média dos números sorteados foi ${soma / arr.length}, e a soma é ${soma}.`)