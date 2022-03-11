const crypto = require('crypto');

const aes256 = require('aes256');
const pass = 'naoconsigolernada'
const text = 'Bora Node.js'

const mensagemCriptografada = aes256.encrypt(pass, text);
console.log(mensagemCriptografada)
