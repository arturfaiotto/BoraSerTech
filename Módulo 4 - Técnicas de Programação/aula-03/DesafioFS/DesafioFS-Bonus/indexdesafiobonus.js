const fs = require('fs');
const path = require('path');

const filePath1 = path.join(__dirname, 'Arquivo1.txt');
const filePath2 = path.join(__dirname, 'Arquivo2.txt');
const filePath3 = path.join(__dirname, 'Arquivo3.txt');
const filePath4 = path.join(__dirname, 'Arquivo4.txt');
const data1 = fs.readFileSync(filePath1, 'utf-8');
const data2 = fs.readFileSync(filePath2, 'utf-8');
const data3 = fs.readFileSync(filePath3, 'utf-8');
const data4 = fs.readFileSync(filePath4, 'utf-8');

fs.writeFile('Mundo_Bita_Fazendinha.txt', (data1.concat(data2.concat(data3.concat(data4)))), (err) => {
    if (err) throw err;
    console.log('\n\nNovo Arquivo criado!!!\n\n');
  });

fs.unlink('Arquivo1.txt')
fs.unlink('Arquivo2.txt')
fs.unlink('Arquivo3.txt')
fs.unlink('Arquivo4.txt')
