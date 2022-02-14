const args = process.argv;
const idade = args[2];

function MaiorDeIdade(idade) {
    idade = Number.parseInt(idade);
    if (Number.isNaN(idade)) {
        throw new Error('Entrada invalida');
    }
    return idade >= 18;
}

function ImprimeIdade(idade) {
    console.log(`Sua idade é ${idade}`);
}

module.exports = { 
    MaiorDeIdade,
    ImprimeIdade
};