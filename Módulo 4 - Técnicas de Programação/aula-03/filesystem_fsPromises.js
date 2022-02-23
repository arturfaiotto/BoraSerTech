const fs = require('fs');
const path = require('path');


// Utilizando o Readdir

fs.readdir(__dirname, (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("\nArquivos do Diterório Atual:");
      files.forEach(file => {
        console.log(file);
      })
    }
  })