const a = 1;
const b = 2;

const igualdade = a == b;
const diferença = a != b;
const maior = a > b;
const maiorouigual = a >= b;
const menor = a < b;
const menorouigual = a <= b;

const and = igualdade && diferença; //O AND retorna TRUE somente quando os dois são TRUE.
const or = igualdade || diferença; //O OR retorna FALSE somente quando os dois são FALSE.

const not = !igualdade; //Quando utiliza o ! na frente de uma variável ela é negada, o valor é invertido.

const igualdaderestrita = a === b; //Verificação do valor e do tipo da variável.
const diferençarestrita = a !== b; //Verificação do valor e do tipo da variável.

//console.log(0 == false);

const valor = 1;

if(valor) {
    console.log("Estou aqui")
} else {
    console.log("Não estou aqui")
}
