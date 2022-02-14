/*Faça um programa que olhe todos os itens de uma lista e diga quantos deles são pares.*/

const lista = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
]

let arrpar = [];
let arrimpar = [];
let ref = 0;

for (let linha = 0; linha < lista.length; linha++) {
    for (let coluna = 0; coluna < lista[linha].length; coluna++) {
        console.log(ref);
        ref++;

        if (ref % 2 === 0) {
            arrpar.push(ref); //adiciona o valor de ref ao array dos pares.
        } else {
            arrimpar.push(ref); //adiciona o valor de ref ao array dos impares.
        }
    }
}

console.log(arrpar); //array com os números pares
console.log(arrimpar); //array com os números impares

console.log("A lista tem " + arrpar.length + " números pares");