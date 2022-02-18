const fs = require('fs');
const path = require('path');


// Utilizando o ReadFile

const filePath = path.join(__dirname, 'file.txt');
fs.readFile(filePath, 'utf-8', (err, data) => {
    console.log('READFILE - O ARQUIVO CONTEM O SEGUINTE TEXTO: \n', data);
});



// Utilizando o ReadFileSync

const filePath1 = path.join(__dirname, 'file.txt');
const data = fs.readFileSync(filePath1, 'utf-8');
console.log('READFILESYNC - O ARQUIVO CONTEM O SEGUINTE TEXTO: \n', data);



// Utilizando o Promise.readFile

const filePath2 = path.join(__dirname, 'file.txt');
fs.promises
    .readFile(filePath2, 'utf-8')
    .then((data) => {
        console.log('PROMISES - O ARQUIVO CONTEM O SEGUINTE TEXTO: \n', data)
    });

