const prompt = require("prompt-sync")({ signit: true });

const produto = parseInt(prompt("Digite o número do produto: " ));

if (produto === 1) {
    console.log("Alimento não-perecível");
} else if (produto >= 2 && produto <= 4) {
    console.log("Alimento perecível");
} else if (produto >= 5 && produto <= 6) {
    console.log("Vestuario");
} else if (produto === 7) {
    console.log("Higiene pessoal");
} else if (produto >= 8 && produto <= 10) {
    console.log("Utensílios Domésticos");
} else {
    console.log("Produto inexistente");
}
