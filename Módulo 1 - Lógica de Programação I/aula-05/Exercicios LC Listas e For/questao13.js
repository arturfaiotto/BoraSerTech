/*Faça um programa que sorteia 10 números entre 0 e 100 e conte quantos números sorteados são maiores que 50.*/

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const arr = []

for (i = 0; i < 10; i++) {
const numero = randomIntFromInterval(1,100);
// console.log (numero); //validação do intervalo
    if (numero >= 50) {
        arr.push(numero);
    }
}

console.log(arr); //validação da array

console.log("Existem " + arr.length + " números maiores que 50.");