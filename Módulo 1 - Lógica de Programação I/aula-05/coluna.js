const prompt = require("prompt-sync")({ signit: true });
const coluna = parseInt(prompt("Digite a coluna que deseja consultar: (0, 1, 2): "));

const tabela = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],   
]

for (var repet = 0; repet < tabela.length; repet++) {
    console.log(tabela[repet][coluna]);
}