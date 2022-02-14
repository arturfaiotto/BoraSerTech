class Quadrado {

    constructor(base, altura) {
        this._base = undefined;
        this._altura = undefined;
        this._cor - undefined;       
    }

    get cor() { return this._cor }
    set cor(cor) {
        if (cor !== "red" && cor !== "blue" && cor !== "green") throw "Cor Inválida."
        this._cor = cor;
    }

    get base() { return this._base }
    set base(base) {
        if (isNaN(base)) throw "Digite apenas números."
        this._base = base
    }

    get altura() { return this._altura }
    set altura(altura) {
        if (isNaN(altura)) throw "Digite apenas números."
        this._altura = altura
    }

}

const quadrado = new Quadrado();
console.log(quadrado);

quadrado.cor = "green";
console.log(quadrado);

quadrado.altura = 20
console.log(quadrado);

quadrado.base = 5
console.log(quadrado);