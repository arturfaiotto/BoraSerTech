/*Essa matriz representa os dados de 4 alunos. Os dados são: nome, idade, 
linguagem de programação que está aprendendo e curso que está fazendo na Let's Code.

1 - Mostre no console todos os dados da aluna Luciana.
2 - Mostre no console a idade da aluna Letícia.

Modifique o curso do aluno Pedro de Mobile para Data Science.*/


const alunos = [
    ["João", 30, "Python", "Data Science"],
    ["Letícia", 23, "Javascript", "Web Full Stack - Frontend"],
    ["Pedro", 40, "Java", "Mobile"],
    ["Luciana", 25, "C#", "Web Full Stack - Backend"]
]

const luci = [];
const pedro = [];

for (i = 0; i < alunos.length; i++) {
    let info = alunos[3][i];
    luci.push(info);
}

console.log(luci);
console.log(`Leticia tem ${alunos[1][1]} anos`);

alunos[2][3] = "Data Science";

for (i1 = 0; i1 < alunos.length; i1++) {
    let info1 = alunos[2][i1];
    pedro.push(info1);
}

console.log(pedro);