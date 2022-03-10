const { DateTime } = require('luxon');

const dataHoje = DateTime.now();
console.log(`A data de HOJE é: \n
    ${dataHoje.toLocaleString(
        DateTime.DATE_HUGE
    )}. \n\n`  
);

// EXERCICIO1: Criar e imprimir o dia de ontem.
const dataOntem = (dataHoje.plus({day: -1}));
console.log(`A resposta do exercício 1 é: \n
    O dia de ONTEM foi: ${dataOntem.toLocaleString(
        DateTime.DATE_HUGE
    )}. \n\n`
);


// EXERCICIO2: Criar o dia 5 do mês de Julho deste ano às 15h usando o método fromObject.
const cindoDeJulho = (
  DateTime
    .fromObject(
      { day: 5, month: 7, year: 2022, hour: 15 },
      { zone: 'America/Sao_Paulo' },
    )
);

console.log(`A resposta do exercício 2 é: \n
    Utilizando o FromObject para criar o dia: ${cindoDeJulho.toLocaleString(
        DateTime.DATE_HUGE
    )}. \n\n`
);


// EXERCICIO3: Imprimir, em alemão, o dia da semana da data 15 dias antes da véspera de natal de 1980.
const vesperaNatal80 = (
  DateTime
    .fromObject(
      { day: 24, month: 12, year: 1980 },
      { zone: 'Europe/Berlin' },
    )
);

const quinzeAntes = (vesperaNatal80.plus({day: -15}));
console.log(`A resposta do exercício 3 é: \n
    A vézpera do Natal de 1980 foi ${vesperaNatal80.toLocaleString({weekday: 'long'})}, 
    quinze dias antes foi uma ${quinzeAntes.toLocaleString(DateTime.DATE_HUGE)}, 
    ou como dizem por lá ${quinzeAntes.setLocale('de-de').toLocaleString(DateTime.DATE_HUGE)}. 
    \n`
);

// Para consultar https://moment.github.io/luxon/#/tour