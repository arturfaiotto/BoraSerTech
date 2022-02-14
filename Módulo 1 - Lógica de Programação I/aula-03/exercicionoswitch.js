const prompt = require("prompt-sync")({ signit: true });

const produto = parseInt(prompt("Digite o número do produto: " ));

switch(produto) {
    case 1:
        console.log("Alimento não-perecível");
        break;
    case 2:
    case 3:
    case 4:        
        console.log("Alimento perecível");
        break;
    case 5:
    case 6:  
        console.log("Vestuario");
        break;
    case 7:
        console.log("Higiene pessoal");
        break;
    case 8:
    case 9:    
    case 10:  
        console.log("Utensílios Domésticos");
        break;
    default:
    console.log("Produto inexistente");
}
