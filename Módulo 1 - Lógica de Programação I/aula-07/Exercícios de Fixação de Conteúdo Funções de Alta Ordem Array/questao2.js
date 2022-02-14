/*Considere o array abaixo:

Crie um código que recebe uma idade mínima e idade máxima através de input e exiba na
 tela quais usuários foram encontrados com os critérios da busca.*/

 const usuarios = [
    {
        id: 1,
        nome: 'Nathan',
        idade: 28,
        email: 'nathan@gmail.com',
        senha: '1234'
    },
    {
        id: 2,
        nome: 'Alan',
        idade: 30,
        email: 'alan@gmail.com',
        senha: '4321'
    },
    {
        id: 3,
        nome: 'Alberto',
        idade: 35,
        email: 'alberto@gmail.com',
        senha: '7263'
    },
    {
        id: 4,
        nome: 'Jeferson',
        idade: 25,
        email: 'jeferson@gmail.com',
        senha: '5242'
    },
];

const prompt = require("prompt-sync")({ signit: true });

const agemin = prompt("Digite a idade mínima: ");
const agemax = prompt("Digite a idade máxima: ");


const busca = usuarios.filter(u => u.idade >= agemin && u.idade <= agemax)

console.log(busca)