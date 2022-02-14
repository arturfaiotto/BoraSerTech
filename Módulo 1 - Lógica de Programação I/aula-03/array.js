const array = [5, 4, 3.5, 4, "banana", null, undefined, "chuva"];

// Manipulação de Array

console.log(array); // Exibe toda Array
console.log(array[0]); // Exibe determinado index da arrat
console.log(array[50]); // Neste caso o index 50 nao existe, a console retorna Undefined
array[0] = "laranja"; // Manipulação/atribuição de valores do Array
console.log(array[0]);

// Consultando o tamanho do Array

console.log(array.length); 

// Inserção de valores ao Array,
// Push adiciona valor ao final do Array

const array2 = [11]
array2.push(10)

console.log(array2)

// Unshift adiciona valor ao inicio do Array

const array3 = [11]
array3.unshift(10)

console.log(array3)


//Adiciona itens ao final do Array

// array.push("maçã");
// array.unshift("pera");

// console.log(array)

