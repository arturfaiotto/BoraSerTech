const crypto = require('crypto');

const aes256 = require('aes256');
const pass = 'letscode2022'
const text = 'SLSNLsMKtcBRhq2Ppyu4TYDxtVk2nZ4hQq7CMsRFbMamJQSGK4NBwA=='

const mensagemDescriptografada = aes256.decrypt(pass, text);
console.log(mensagemDescriptografada)