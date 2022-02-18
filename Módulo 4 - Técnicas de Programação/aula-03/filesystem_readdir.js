const fs = require('fs');
const path = require('path');


// Utilizando o Readdir

// fs.readdir(__dirname, (err, files) => {
//     if (err)
//       console.log(err);
//     else {
//       console.log("\nArquivos do Diterório Atual:");
//       files.forEach(file => {
//         console.log(file);
//       })
//     }
//   })

fs.readdir(__dirname, (err, files) => {
    files.forEach(f => {
        const fPath = path.join(__dirname, f)
        fs.stat(fPath, (_, fileStats) => {
            console.log(`File: ${f}\t isFile: ${fileStats.isFile()}\t isDir: ${fileStats.isDirectory()}`);
        });
    });
});