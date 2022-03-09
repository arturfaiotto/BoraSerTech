const fsPromise = require('fs').promises;
const path = require('path');
const https = require('https');

const FOLDER_PATH = path.join(__dirname, 'txt-files');

async function readTxtFiles(folderPath) {
  if (folderPath === undefined) {
    throw new Error('folderPath is undefined');
  }

  try {
    const files = await fsPromise.readdir(folderPath);
    const readPromises = files.map(file => {
      const filePath = path.join(__dirname, 'txt-files', file);
      return fsPromise.readFile(filePath, 'utf-8');
    });
    return Promise.all(readPromises);
  } catch (err) {
    throw new Error('error reading files', err);
  }
}

function createHTMLBody(items) {
  const liItems = (
    items
      .map((item) => (`<li>${item}</li>`))
      .join('')
  );

  return `
    <div
      style="width: 100vw;
             height: 100vh;
             text-align: center;">
      <h1>Cervejas</h1>
      <ul>
        ${liItems}
      </ul>
    </div>
  `;
}

async function getBodyWithForAwait(req) {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  return Buffer.concat(buffers).toString();
}

function getBodyWithPromise(req) {
  return new Promise((resolve, reject) => {
    const buffers = [];

    req.on('data', chunk => {
      console.log({chunk});
      buffers.push(chunk);
    });
    req.on('end', () => {
      const data = Buffer.concat(buffers).toString();
      resolve(data);
    });
    req.on('error', (e) => {
      reject(e);
    });
  });
}

async function writeTxtFile(content) {
  const newFileName = `${new Date().toISOString()}.txt`;
  const newFilePath = path.join(FOLDER_PATH, newFileName);

  await fsPromise.writeFile(newFilePath, content);
  return {
    fileName: newFileName,
    content,
  };
}

function fetchPokemon(id = 4) {
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
  const pokeURL = `${BASE_URL}${id}`;

  return new Promise ((resolve, reject) => {
    const req = https.request(pokeURL, res => {
      const data = [];

      res.on('data', chunk => {
        data.push(chunk);
      });

      res.on('end', () => {
        const pokemonRaw = Buffer.concat(data).toString();
        const pokemonJSON = JSON.parse(pokemonRaw);
        resolve(pokemonJSON.name);
      });
    });


    req.on('error', error => {
      reject(error);
    });

    req.end();
  });

}

module.exports = {
  readTxtFiles,
  createHTMLBody,
  getBodyWithForAwait,
  getBodyWithPromise,
  FOLDER_PATH,
  writeTxtFile,
  fetchPokemon,
};
