const fs = require('fs');
const path = require('path');
// const { threadId } = require('worker_threads');


// const filePath = path.join(__dirname, 'file.txt');
// fs.readFile(filePath, 'utf-8', (err, data) => {
//     console.log('Os dados são', data);
// });

//SYNCRONA

// const data = fs.readFileSync(filePath, 'utf-8');
// console.log('Resposta do readFileSync', data);
// console.log('Agora sim é o final');



// function cumprimenta(nome) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Ola, ' + nome);
//         }, 2000);
//     });
// }

// cumprimenta('Artur').then((res) => {console.log(res);});


// fs.promises
//     .readFile(filePath, 'utf-8')
//     .then((res) => {
//         console.log('Isso ta acontecendo dentro da Promese\n', res)
//     });


fs.readdir


    