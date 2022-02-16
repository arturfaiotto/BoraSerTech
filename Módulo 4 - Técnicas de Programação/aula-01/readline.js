const readline = require('readline');

function verificaIdade(idade) {
    return Number.parseInt(idade) >= 18;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual idade verificar? ', (idade) => {
    const msg = verificaIdade(idade) ? 'Maior' : 'Menor';
});