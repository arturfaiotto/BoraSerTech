/*Durante a Black Friday uma loja declarou descontos em produtos do seu catálogo, de acordo com a regra abaixo:

5% para produtos abaixo de R$ 200,00
10% para produtos abaixo de R$ 400,00
15% para produtos abaixo de R$ 2000,00
20% para produtos acima de R$ 2000,00

Com base nisso, crie um programa que recebe o preço normal dos 10 produtos mais adquiridos pelos clientes e guarde-os em um array.

Em seguida, utilize a função map para aplicar o desconto nos preços e, com isso, criar um array com o preço após os descontos.*/

const prompt = require("prompt-sync")({ signit: true });

const precoNormal = []

for (i = 0; i < 10; i++) {
    const preco = (parseInt(prompt(`Digite o preço do ${i+1}º produto mais vendido: `)));
    precoNormal.push(preco)
}

console.log(precoNormal)

const precoDesconto = precoNormal.map(
    x => x <= 200 ? x = x - (x*0.05): 
    x <= 400 && x >= 200 ? x = x - (x*0.10): 
    x <= 2000 && x >= 400 ? x = x - (x*0.15): 
    x > 200 ? x = x - (x*0.20): isNaN
)

console.log(precoDesconto)