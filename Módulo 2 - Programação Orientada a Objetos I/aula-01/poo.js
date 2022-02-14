// class NomeDaClasse {
//     constructor(){

//     }
// }

// class Pessoa {
//     constructor (nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const pessoa1 = new Pessoa("Artur", 30);
// const pessoa2 = new Pessoa("Leticia", 29);

// console.log(pessoa1)
// console.log(pessoa2)


// class Carro {
//     constructor(montadora, modelo, carroceria, fabricacao, combustivel, cor, rodas, direcao, cambio, motor) {
//         this.montadora = montadora;
//         this.modelo = modelo;
//         this.carroceria = carroceria;
//         this.fabricacao = fabricacao;
//         this.combustivel = combustivel;
//         this.cor = cor;
//         this.rodas = rodas;
//         this.direcao = direcao;
//         this.cambio = cambio;
//         this. motor = motor
//     }
// }

// const carro1 = new Carro ("Ford", "EcoSport", "SUV", "2021", "Flex", "Azul", "Liga leve", "Eletrica", "Automatico", "2.0")

// console.log(carro1)

class Quadrado {
    constructor(base, altura) {
        if (isNaN(base) || isNaN(altura)) throw "Existem entradas inválidas";
        this.base = base;
        this.altura = altura;
        this.area = this.base * this.altura
    }

    calcularArea(){
        return this.base * this.altura;
    }

    imprimir(){
        return ` <div style='width:${this.base}px;height:${this.altura}px;background-color:${this.cor || "red"}'></div>`
    }

}

const quadrado = new Quadrado(400, 500)
document.write(quadrado.imprimir())