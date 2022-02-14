// Criando uma função
// function Hello() {
//     console.log('Hello World');
// }

//Invocando uma função
//Hello();

// function somar() {
//     console.log(`1 + 2 = ${1 + 2}`);
// }

//somar();

// let resultado = 0

// const prompt = require("prompt-sync")({ signit: true });

// function somar(num1, num2) {
//     console.log(`${num1} + ${num2} = ${num1 + num2}`)
//     console.log(`Soma incremento ${resultado += num1 + num2}`)
// }

// let resultadosoma = 0;
// let media = 0

// for (i = 1; i <= 5; i++) {
//     const prompt = require("prompt-sync")({ signit: true });
//     const num1 = parseInt(prompt(`Digite os ${i}º um números: `));
//     const num2 = parseInt(prompt(`Digite os ${i}º um números: `));
//     somar(num1, num2);
// }

// function somar(num1, num2) {
//     if (isNaN(num1) || isNaN(num2)) return NaN;
//     resultadosoma += (num1 + num2);
//     media = resultadosoma / 2;
//     return num1 + num2;
// }

// console.log(resultadosoma);
// console.log(media);


// Função Anomima
// let num1 = 1
// let num2 = 2

// const somar = function(a, b) {
//    return num1 + num2
//}
// console.log(somar())



//Arrow Function
let num1 = 1
let num2 = 2

const somar = (a, b) => num1 + num2
console.log(somar())