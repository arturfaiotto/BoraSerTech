// const prompt = require("prompt-sync")({ signit: true });

// const oper = prompt("Digite a operação matemática: ");
// const num1 = parseInt(prompt("Digite o primeiro número: "));
// const num2 = parseInt(prompt("Digite o segundo número: "));

// switch (oper) {
//     case "+":
//         const somar = (a, b) => a + b;
//         const calcular = (operacao, a, b) => somar(a,b);
//         const resultado = calcular(oper, num1, num2);
//         console.log(resultado);
//         break;
//     case "-":
//         const subtrair = (a, b) => a - b;
//         const calcular1 = (operacao, a, b) => subtrair(a,b);
//         const resultado1 = calcular1(oper, num1, num2);
//         console.log(resultado1);
//         break;
//     case "*":
//         const multiplicar  = (a, b) => a * b;
//         const calcular2 = (operacao, a, b) => multiplicar(a,b);
//         const resultado2 = calcular2(oper, num1, num2);
//         console.log(resultado2);
//         break;
//     case "/":
//         const dividir = (a, b) => b > 0 ? a / b : NaN;
//         const calcular3 = (operacao, a, b) => dividir(a,b);
//         const resultado3 = calcular3(oper, num1, num2);
//         console.log(resultado3);
//         break;
// }

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
var strCPF = "38399576809";
console.log(TestaCPF(strCPF));
