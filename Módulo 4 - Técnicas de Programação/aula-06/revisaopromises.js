function greet(name) {
    return new Promise((resolve, reject) => {
      if (name === 'Clark Kent') {
        reject('nome não é válido!');
      }
      
      setTimeout(() => {
        resolve(`hello ${name}`);
      }, 2000);
    });
  }
  
  // greet('Clark Kent')
  //   .then(result => {
  //     console.log('Valor resolvido foi:', result);
  //   })
  //   .catch(error => {
  //     console.log('greet deu erro:', error);
  //   });
  
  // IIFE
  // Immediately invoked function expression
  // (async function () {
  //   try {
  //     const result = await greet('Erich');
  //     console.log('Valor resolvido com async/await:', result);
  
  //     const result2 = await greet('Foo');
  //     console.log('Result2', result2);
  //   } catch (err) {
  //     console.log('Valor rejeitado com async/await:', err);
  //   }
  // })();
  
  const result1 = greet('Foo');
  const result2 = greet('Baz');
  const result3 = greet('Clark Kent');
  const resultPromises = [
    result1,
    result2,
    result3,
  ];
  
  Promise
    .allSettled(resultPromises)
    .then(results => {
      console.log({ results });
    });
  
  async function asyncGreet(name) {
    return `olá, ${name}`;
  }
  
asyncGreet('Erich').then(console.log('Deu certo!'));