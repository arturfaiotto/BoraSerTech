class Quadrado {
    constructor(base, altura) {
        let cor = "blue";
        this.base = base;
        this.altura = altura;
        this.getCor = function() { return cor; };
    }

}

const quadrado = new Quadrado(10, 5);

console.log(quadrado)
console.log(quadrado.getCor());
