/*Sorteie um vetor de 10 números e imprima:

a. um vetor com os 4 primeiros números;
b. um vetor com os 5 últimos números;
c. um vetor contendo apenas os elementos das posições pares;
d. um vetor contendo apenas os elementos das posições ímpares;
e. um vetor inverso do vetor sorteado (isto é, um vetor que começa com o último elemento o vetor sorteado e termina com o primeiro);
f. um vetor inverso dos 5 primeiros números;
g. um vetor inverso dos 5 últimos números.*/

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const arr1 = [];
const arrpar = [];
const arrimpar = [];

for (i = 0; i < 10; i++) {
const numero = randomIntFromInterval(1,100);
    arr1.push(numero);
    if (numero % 2 === 0) {
        arrpar.push(numero);
    } else {
        arrimpar.push(numero);
    }
}
console.log("Todos os números");
console.log(arr1);

const arr2 = [...arr1];
let quatropri = arr2.splice(4);
console.log("Os 4 primeiros números");
console.log(arr2);

const arr3 = [...arr1];
let cincoulti = arr3.splice(5);
console.log("Os 5 últimos números");
console.log(cincoulti);

console.log("Todos os números pares");
console.log(arrpar);

console.log("Todos os números impares");
console.log(arrimpar);

console.log("O inverso dos 4 primeiros números");
let inversopri = arr2.reverse();
console.log(inversopri);

console.log("O inverso dos 5 últimos números");
let inversoult = cincoulti.reverse();
console.log(cincoulti);