/*Crie um objeto chamado cachorro através de uma função construtora. 
As propriedades desse objeto devem ser nome, apelido, raça, idade e isVacinado. Ofereça um valor padrão para chaves inexistentes.*/

const cachorro = (nome, apelido, raça, idade, vacinado) => ({
    nome : nome || "",
    apelido : apelido || "",
    raça : raça || "",
    idade : idade || "",
    vacinado : vacinado || ""})

const cachorro1 = cachorro("Bob Jr.", "Bob", "Poodle", "5", "sim");
const cachorro2 = cachorro("James", "Roco", "Pug", "", "sim");

console.log(cachorro1);
console.log(cachorro2);


