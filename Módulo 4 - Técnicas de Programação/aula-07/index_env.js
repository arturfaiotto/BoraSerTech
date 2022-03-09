require('dotenv').config();

console.log(process.env.NOME, process.env.SOBRENOME); //Arquivo /.env
// 'Artur', 'Clemente'

console.log(process.env.BEBE); //Arquivo variável do WINDOWS
// 'Bernardo'

// const axios = require('axios').default;
// axios.get(URL, {'Authorization': process.env.API_KEY});
// function vazarSegredos() {
//     console.log (
//         'Minha APJ_KEY é', process.env.API_KEY,
//     )
// };