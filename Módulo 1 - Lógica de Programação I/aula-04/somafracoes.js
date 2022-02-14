/*Calcule a soma de até mil termos da série 1 + 1/2 + 1/4 + 1/8 + 1/16 + ...
Dica! Use três variáveis:

um contador, que começa em zero;
uma variável para a soma de todos os termos, que também começa em zero;
uma variável para cada termo, que começa em 1 e a cada loop é dividida por 2.*/

let num = 1
let total = 0

for (let cont = 0; cont < 1000; cont++) {
    total += num;
    num = num / 2;
}

console.log(total);