const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function mostrarMenu() {
    console.log("\n======================");
    console.log("SISTEMA ESCOLAR");
    console.log("=======================");
    console.log("1 - Cadastrar Aluno");
    console.log("2 - Listar Aluno");
    console.log("3 - Buscar por ID");
    console.log("4 - Atualizar Aluno");
    console.log("5 - Remover Aluno");
    console.log("6 - Mostrar Alunos Aprovados");
    console.log("7 - Mostrar Alunos Reprovados");
    console.log("0 - Sair");
    console.log("=======================");

    rl.question("Escolha uma opção ", (opcao) => {
        if (opcao === "1") {
            cadastrarAluno();
        }
    })
}

function cadastrarAluno(){
    console.log("Cadastrar Aluno");

    rl.question("digite o nome do aluno ", (nome) => {
        rl.question("Digite a idade do aluno: ", (idade) => {
            rl.question("Digite a turma do aluno: ", (turma) => {
                rl.question("Digite a nota do aluno: ", (nota) => {
                    idade = Number(idade);
                    nota = Number(nota);


                    if(nome === "" || idade === "" || turma === "" || nota === ""){
                        console.log("ERRO: Não prrencheu todas as infos");
                        mostrarMenu();
                        return;
                    } 

                    if(idade <= 0 ||nota < 0 || nota > 10) {
                        console.log("ERRO: Idade ou nota inválida");
                        mostrarMenu();
                        return;
                    }
                    
                })
            })
        })
    })
}
