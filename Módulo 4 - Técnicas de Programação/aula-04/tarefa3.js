/*
Criar função que que retorna uma Promise com um
número aleatório após esperar x milisegundos
(criar tempo de espera e número aleatório usando randomNumberBetween)
*/

function randomNumberBetween(min = 2000, max = 7000) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomNumberAsync() {
  const tempoDeEspera = randomNumberBetween();
  console.log(`vamos esperar ${tempoDeEspera} milisegundos!`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const aleatorio = randomNumberBetween();
      console.log('numero aleatorio gerado', aleatorio);

      if (aleatorio < 3500) reject('numero mto baixo!');
      else resolve(aleatorio);
    }, tempoDeEspera);
  });
}

// chamar usando then/catch
randomNumberAsync()
  .then((resultado) => {
    console.log(`[then/catch] then: ${resultado}`);
  })
  .catch((err) => {
    console.info(`[then/catch] catch: ${err}`);
  });