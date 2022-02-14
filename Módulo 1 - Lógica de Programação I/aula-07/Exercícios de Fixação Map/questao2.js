/* Considere o array abaixo:

Crie um código que recebe via inputs o preço máximo e o preço mínimo para realizar uma busca.
Quando o usuário clicar em um botão, faça a busca no array e exiba na tela os produtos encontrados entre preço minimo e máximo.*/

const prompt = require("prompt-sync")({ signit: true });

const produtos = [
    {
        id: 1,
        nome: 'Galaxy S21',
        preco: 5000
    },
    {
        id: 2,
        nome: 'Galaxy A51',
        preco: 1500
    },
    {
        id: 3,
        nome: 'Iphone 12',
        preco: 12000
    },
    {
        id: 4,
        nome: 'Iphone 6',
        preco: 3000
    },
    {
        id: 5,
        nome: 'Iphone 7',
        preco: 3500
    }
];

console.log("Refinar a busca...")
const valor_min = parseFloat(prompt("Digite o valor mínimo: "));
const valor_max = parseFloat(prompt("Digite o valor máximo: "));

const busca = produtos.map((x) => {
        prco = x.preco
         if (prco >= valor_min && prco <= valor_max) {
            return {
                id : x.id,
                nome : x.nome,
                preco : x.preco
            } 
        }
})

console.log(busca)