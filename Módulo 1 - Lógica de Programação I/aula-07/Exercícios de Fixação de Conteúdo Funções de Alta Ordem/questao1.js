/*Crie um Sistema de Recursos Humanos onde podemos adicionar colaboradores com as seguintes características:

Id(Deve ser único);
Nome;
Idade;
Cargo;
Salário;
Data de admissão(Utilize input do tipo 'date' para facilitar);
O sistema deve ter as seguintes ações:

Adicionar colaborador(Sempre limpar inputs após adicionar);
Remover colaborador;
Busca em tempo real(a cada tecla que colocamos no input) e avançada por id/nome/cargo;
Obs: Sempre atualizar a lista com cada ação que é disparada seja adiconar, remover, etc...
Exiba em alguma lugar na tela as seguintes informações:

Total de colaboradores;
Qual o custo mensal pagando todos esses colaboradores(Soma de todos os salários);
A média da idade dos colaboradores;
A média dos salários dos colaboradores;
Obs: Utilize funções de alta ordem para realizar os cálculos.*/

const prompt = require("prompt-sync")({ signit: true });

const cadastroFuncionario = (id, nome, idade, cargo, salario, dataAdmissao) => ({
    id : id, 
    nome : nome, 
    idade : idade, 
    cargo : cargo, 
    salario : salario,
    dataAdmissao : dataAdmissao
})

let validacaomenu = false;
let validacaosubmenu = false;
let addfun = false;
let delfun = false;

const arrtotalcolab = []
const arrtotalsalario = [];
const arrtotalidade = [];

let mediaidade = 0;

let totalsalario = 0;
let mediasalario = 0;

let id = arrtotalcolab.length;


console.log("Bem vindo ao sistema de RH\n");

do {

    console.log("-------------------- INFORMAÇÕES ATUAIS --------------------")
    console.log(` Total de colaboradores: ${arrtotalcolab.length}\n Média de idade dos colaboradores: ${mediaidade.toFixed(2)}\n Total soma dos salários: ${totalsalario.toFixed(2)}\n Media dos salários: ${mediasalario.toFixed(2)}`)
    console.log("------------------------------------------------------------")

    console.log("1 - Adicionar colaborador.");   
    console.log("2 - Remover colaborador.");
    console.log("3 - Buscar/pesquisar colaborador (ID / Nome / Cargo).");
    console.log("4 - Sair.");

    let menu = prompt("Escolha uma das opções: ").toString();
        
    switch (menu) {

        case "1": 
            do {
                
                console.log("----- Opção de cadastro de funcionários -----");
                id = id + 1
                console.log(`Este é o funcionário ID único ${id}`);    
                nome = prompt("Digite o nome do funcionário: ");
                idade = parseInt(prompt("Digite a idade do funcionário: "));
                arrtotalidade.push(idade);
                cargo = prompt("Digite o cargo do funcionário: ");
                salario = parseInt(prompt("Digite o salário do funcionário: "));
                arrtotalsalario.push(salario);
                dataAdmissao = prompt("Digite a data de admissão do funcionário: ");

                let colaboradores = cadastroFuncionario(id, nome, idade, cargo, salario, dataAdmissao);
                arrtotalcolab.push(colaboradores);

                console.log("Funcionário cadastrado com sucesso!!!");
                console.log(colaboradores);
                    do{
                        console.log("E agora, o que deseja fazer?\n1 - Adicionar novo funcionário.\n2 - Voltar ao Menu Principal.\n3 - Sair.");
                        var voltar = prompt("Escolha uma das opções acima: ").toString();

                        switch (voltar) {
                            case "1":
                                addfun = true;
                                validacaosubmenu = true;
                            break;
                            case "2":
                                validacaosubmenu = true;
                                addfun = false;
                            break;
                            case "3":
                                console.log("\nObrigado por utilizar nosso sistema. Até breve!\n"); 
                                validacaosubmenu = true;
                                validacaomenu = true;
                                addfun = false;
                            break;
                            default:
                                console.log("Opção inválida. Tente novamente!")
                            break;    
                        }
                    } while (validacaosubmenu === false);
            } while (addfun === true);
        break; 

        case "2": 
            do {
                console.log(arrtotalcolab);

                let remover = prompt("Qual ID do funcionário que deseja remover?: ")
                remover = (arrtotalcolab.indexOf(remover)+1)

                arrtotalcolab.splice(remover,1);
                arrtotalsalario.splice(remover,1);
                arrtotalidade.splice(remover,1);
                              
                console.log("Funcionário removido com sucesso!!!");
                console.log(arrtotalcolab);

                do{
                    console.log("E agora, o que deseja fazer?\n1 - Remover funcionário.\n2 - Voltar ao Menu Principal.\n3 - Sair.");
                    var voltar = prompt("Escolha uma das opções acima: ").toString()
                    switch (voltar) {
                        case "1":
                            delfun = true;
                            validacaosubmenu = true;
                        break;
                        case "2":
                            validacaosubmenu = true;
                            delfun = false;
                        break;
                        case "3":
                            console.log("\nObrigado por utilizar nosso sistema. Até breve!\n"); 
                            validacaosubmenu = true;
                            validacaomenu = true;
                            delfun = false;
                        break;
                        default:
                            console.log("Opção inválida. Tente novamente!")
                        break;    
                    }
                } while (validacaosubmenu === false);
            } while (delfun === true);     
        break;

        case "3": 
            
            let busca = prompt("Digite o ID, Nome ou Cargo do colaborador para consulta).")
            busca = busca + 1
            
            const achei = arrtotalcolab.filter(i => i.id === busca)

            // function buscador(value) {
            //     return value === busca;
            // }

            // let achei = arrtotalcolab.filter(buscador)
            console.log(achei)

            console.log("E agora, o que deseja fazer?\n1 - Voltar ao Menu Principal.\n2 - Sair.");
            var voltar = prompt("Escolha uma das opções acima: ").toString()
                if (voltar === "1") {
                    validacaomenu = false;
                } else {
                    console.log("\nObrigado por utilizar nosso sistema. Até breve!\n"); 
                    validacaomenu = true;
                }
        break; 
        
        case "4": 
            console.log("\nObrigado por utilizar nosso sistema. Até breve!\n"); 
            validacaomenu = true;
        break; 

        default:
            console.log("\nOpção inválida. Tente novamente.\n");
            validacaomenu = false;
        break;
    } 

    totalsalario = arrtotalsalario.reduce(function(totalsalario, i) {
        return totalsalario + i    
    })

    mediasalario = totalsalario / arrtotalsalario.length

    mediaidade = arrtotalidade.reduce(function(totalidade, i) {
        const resultado = (totalidade + i)/arrtotalidade.length  
        return resultado  
    })

} while (validacaomenu === false)

