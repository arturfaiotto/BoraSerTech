/*Uitilize o código que foi disponibilizado na aula e siga as regras de negócio da lista de exercícios.

Considere que o objeto do aluno contém as seguintes características:

Id (Único)(Number)
Nome(String)
Idade(Number)
Exercicios Adaptados(Boolean)
Professor Responsável(String)
Tem Acesso(Boolean)(Para bloquear entrada caso necessário)
Valor Mensalidade(Number)

No sistema de acadêmia, adicione as seguintes funcionalidades:

Adicionar aluno;
Remover aluno;

Ao adicionar aluno, verifique se ele precisa ter exercícios adaptados(Se idade maior que 60) 
e coloque true ou false para essa propriedade no objeto;
O aluno sempre terá um professor responsável, exiba em um select a lista de professores que 
podem ser selecionados como responsáveis e grave a informação no objeto.*/

const prompt = require("prompt-sync")({ signit: true });

const cadastroAluno = (id, nome, idade, exercAdapt, profResp, temAcesso, mensalidade) => ({
    id : id, 
    nome : nome, 
    idade : idade, 
    exercicios_adaptados : exercAdapt, 
    professor_responsavel : profResp,
    tem_acesso : temAcesso,
    mensalidade : mensalidade
})

const arrtotalalunos = [];

let validacaomenu = false;

let id = 1;

console.log("Bem vindo ao sistema da Academia\n");

do {

    console.log("1 - Adicionar Aluno.");   
    console.log("2 - Remover Aluno.");
    console.log("3 - Sair.");

    let menu = prompt("Escolha uma das opções: ").toString();
        
    switch (menu) {

        case "1": 
            do {
                
                console.log("\n----- Opção de cadastro de alunos -----\n");

                console.log(`Este é o Aluno com ID único ${id}`);   
                nome = prompt("Digite o nome do Aluno: ");
                idade = parseInt(prompt("Digite a idade do Aluno: "));
                exercAdapt = (idade >= 60 ? true : false);
                profResp = prompt("Digite o nome do professor: ");
                temAcesso = prompt("O Aluno tem acesso livre a Academia? (S/N): ").toUpperCase();
                    switch (temAcesso){
                        case "S":
                            temAcesso = true;
                        break;
                        case "N":
                            temAcesso = false;
                        break;
                        default:
                            temAcesso = undefined;
                        break;
                    }
                mensalidade = parseFloat(prompt("Digite o valor da mensalidade: "))

                const alunos = cadastroAluno(id, nome, idade, exercAdapt, profResp, temAcesso, mensalidade);
                arrtotalalunos.push(alunos);

                console.log("Aluno cadastrado com sucesso!!!\n");
                console.log(alunos);
                id++
                    do{
                        console.log("E agora, o que deseja fazer?\n1 - Adicionar novo Aluno.\n2 - Voltar ao Menu Principal.\n3 - Sair.");
                        var voltar = prompt("Escolha uma das opções acima: ").toString();

                        switch (voltar) {
                            case "1":
                                addaluno = true;
                                validacaosubmenu = true;
                            break;
                            case "2":
                                validacaosubmenu = true;
                                addaluno = false;
                            break;
                            case "3":
                                console.log("\nObrigado por utilizar nosso sistema. Até breve!\n"); 
                                validacaosubmenu = true;
                                validacaomenu = true;
                                addaluno = false;
                            break;
                            default:
                                console.log("\nOpção inválida. Tente novamente!\n")
                            break;    
                        }
                    } while (validacaosubmenu === false);
            } while (addaluno === true);
        break; 

        case "2": 
            do {

                console.log("\n----- Opção de exclusao de alunos -----\n");
                console.log(arrtotalalunos);

                let remover = prompt("Qual ID do aluno que deseja remover?: ")
               
                arrtotalalunos.splice(arrtotalalunos.indexOf(remover),1);
                              
                console.log("\nAluno removido com sucesso!!!\n");
                console.log(arrtotalalunos);

                do{
                    console.log("E agora, o que deseja fazer?\n1 - Remover Aluno.\n2 - Voltar ao Menu Principal.\n3 - Sair.");
                    var voltar = prompt("Escolha uma das opções acima: \n").toString()
                    switch (voltar) {
                        case "1":
                            delaluno = true;
                            validacaosubmenu = true;
                        break;
                        case "2":
                            validacaosubmenu = true;
                            delaluno = false;
                        break;
                        case "3":
                            console.log("\nObrigado por utilizar nosso sistema. Até breve!\n"); 
                            validacaosubmenu = true;
                            validacaomenu = true;
                            delaluno = false;
                        break;
                        default:
                            console.log("Opção inválida. Tente novamente!")
                        break;    
                    }
                } while (validacaosubmenu === false);
            } while (delaluno === true);     
        break;
       
        case "3": 
            console.log("\nObrigado por utilizar nosso sistema. Até breve!\n"); 
            validacaomenu = true;
        break; 

        default:
            console.log("\nOpção inválida. Tente novamente.\n");
            validacaomenu = false;
        break;
    } 

} while (validacaomenu === false)

