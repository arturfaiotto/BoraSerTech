/*Faça um programa que lê uma indeterminada quantidade de números até que o 0 (zero) seja digitado. 
Ao final, mostre os três menores de forma decrescente.*/

const prompt = require("prompt-sync")({ signit: true });

let arr = []

while (numero !== 0) {
    var numero = parseInt(prompt("Digite qualquer número....  "))
    arr.push(numero);
}

arr.sort((a, b) => a - b);

console.log (arr);

console.log("Os 3 menos valores descrescente são: " + arr[3] + ", " + arr[2] + ", " + arr[1]);