const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let proximoId = 1;
let alunos = [];

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
        } else if(opcao === "2"){
            listarAluno();
        }
    })
}
function listarAluno(){
    console.log("Listar Aluno");

    if(alunos.legth === 0){
        console.log("Nenhum aluno cadastrado");
        mostrarMenu();
        return;
    }

    for(let i = 0; i < alunos.length; i++){
        console.log("\nID: " + alunos[i].id);
        console.log("Nome: " + alunos[i].nome);
        console.log("Idade: " + alunos[i].idade);
        console.log("Turma: " + alunos[i].turma);
        console.log("Nota: " + alunos[i].nota);
        

    }
    mostrarMenu();
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
                    let aluno = {
                        id: proximoId,
                        nome: nome,
                        idade: idade,
                        turma: turma,
                        nota: nota
                    };   
                    alunos.push(aluno);
                    proximoId++;

                    console.log("Aluno Cadastrado com sucesso")
                    mostrarMenu(); 
                })
            })
        })
    })
}


mostrarMenu();