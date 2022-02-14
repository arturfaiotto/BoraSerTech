/* Considere o array abaixo:

Crie um código que recebe um email e senha através de 
input e exiba na tela se a autenticação ocorreu com sucesso ou se email/senha estão inválidos.*/

const usuarios = [
    {
        id: 1,
        nome: 'Nathan',
        idade: 28,
        email: 'nathan@gmail.com',
        senha: '1234'
    },
    {
        id: 2,
        nome: 'Alan',
        idade: 30,
        email: 'alan@gmail.com',
        senha: '4321'
    },
    {
        id: 3,
        nome: 'Alberto',
        idade: 35,
        email: 'alberto@gmail.com',
        senha: '7263'
    },
    {
        id: 4,
        nome: 'Jeferson',
        idade: 25,
        email: 'jeferson@gmail.com',
        senha: '5242'
    },
];

const prompt = require("prompt-sync")({ signit: true });

const email = prompt("Digite o e-mail: ");
const senha = prompt("Digite a senha: ");

const checkemail = usuarios.find(u => u.email === email)
const checksenha = usuarios.find(u => u.senha === senha)

if (checkemail !== undefined && checksenha !== undefined) {
        
    if (checkemail === checksenha) {
        console.log("Acesso Liberado")  
    } else {
        console.log ("Usuário e/ou senha inválidos")
    }
        
} else {
    console.log("Acesso Negado")
}

