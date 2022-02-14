const { MaiorDeIdade, ImprimeIdade } = require('./verificadordeidade');

const args = process.argv;
const idade = args[2];

ImprimeIdade(idade);
console.log(MaiorDeIdade(idade));