const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let carros = [];
let proximoIdCarro = 1;

let clientes = [];
let proximoIdCliente = 1;

let alugueis = [];
let proximoIdAluguel = 1;

function mostrarMenu() {
    console.log("\n========================");
    console.log("SISTEMA DE LOCAÇÂO DE VEICULOS");
    console.log("========================");
    console.log("CARROS");
    console.log("1 - Cadastrar Carro");
    console.log("2 - Listar Carros");
    console.log("3 - Buscar Carro por ID ");
    console.log("4 - Atualizar Carro");
    console.log("5 - Remover Carro");
    console.log("CLIENTES");
    console.log("6 - Cadastrar Cliente");
    console.log("7 - Listar Clientes");
    console.log("8 - Buscar Cliente por ID");
    console.log("9 - Atualizar Cliente");
    console.log("10 - Remover Cliente");
    console.log("=======================");
    console.log("ALUGUEL");
    console.log("11 - Realizar Aluguel");
    console.log("12 - Devolver Carro");
    console.log("13 - Listar Alugueis Ativos");
    console.log("14 - Listar Histórico (Finalizados)");
        

    rl.question("Escolha uma opção: ", (opcao) => {
        if (opcao === "1") {
            cadastrarCarro();
        } else if (opcao === "2") {
            listarCarros();
        } else if (opcao === "3") {
            buscarCarroPorId();
        } else if (opcao === "4") {
            atualizarCarro();
        } else if (opcao === "5") {
            removerCarro();
        } else if (opcao === "6") {
            cadastrarCliente();
        } else if (opcao === "7") {
            listarClientes();
        } else if (opcao === "8") {
            buscarClientePorId();
        } else if (opcao === "9") {
            atualizarCliente();
        } else if (opcao === "10") {
            removerCliente(); 
        } else if (opcao === "11") {
            realizarAluguel(); 
        } else if (opcao === "12") {
            devolverCarro(); 
        } else if (opcao === "13") {
            listarAlugueisAtivos(); 
        } else if (opcao === "14") {
            listarHistorico(); 
        } else if (opcao === "0"){
            console.log("Saindo...")
            rl.close();
        }

    })
}

function listarHistorico(){
    console.log("Listar Histórico");

    if (alugueis.length === 0) {
        console.log("Nenhum Aluguel cadastrado");
        mostrarMenu();
        return;
    }
    for(i = 0; i < alugueis.length; i++){
        if(alugueis[i].status === "finalizado"){
            console.log("Id do aluguel: ",alugueis[i].id);
            console.log("ID do cliente: ",alugueis[i].idCliente);
            console.log("Id do carro: ",alugueis[i].idCarro);
            console.log("Preço por dia do aluguel: ",alugueis[i].dias);
            console.log("Valor total: ",alugueis[i].total);
            console.log("Status: ",alugueis[i].status)
        }
    }
    mostrarMenu();
}


function listarAlugueisAtivos(){
    console.log("Listar Alugueis Ativos")

    if (alugueis.length === 0) {
        console.log("Nenhum Aluguel cadastrado");
        mostrarMenu();
        return;
    }
    for(i = 0; i < alugueis.length; i++){
        if(alugueis[i].status === "ativo"){
            console.log("Id do aluguel: ",alugueis[i].id);
            console.log("ID do cliente: ",alugueis[i].idCliente);
            console.log("Id do carro: ",alugueis[i].idCarro);
            console.log("Preço por dia do aluguel: ",alugueis[i].dias);
            console.log("Valor total: ",alugueis[i].total);
            console.log("Status: ",alugueis[i].status)
        }
    }
    mostrarMenu();
}
function devolverCarro(){
    console.log("Devolver Carro");

    rl.question("Digite o Id do Aluguel", (idAluguel) => {
        idAluguel = Number(idAluguel);
        let aluguel = encontrarAlugueisPorId(idAluguel);
        let carro = encontrarCarroPorId(aluguel.idCarro);
     
        if (aluguel === null) {
            console.log("Aluguel não encontrado");
            mostrarMenu();
            return;
        }
        if(aluguel.status === "ativo"){
            aluguel.status = "finalizado"
        }
        if(carro.dispo === false){
            carro.dispo === true;
        }
        console.log("Carro devolvido!")
        mostrarMenu();

    })
}

function realizarAluguel() {
    console.log("Realizar Aluguel");

    rl.question("Digite o ID do cliente: ", (idCliente) => {
        idCliente = Number(idCliente);
        let cliente = encontrarClientePorId(idCliente);

        if (cliente === null) {
            console.log("Cliente não encontrado");
            mostrarMenu();
            return;
        }

        rl.question("Digite o ID do carro: ", (idCarro) => {
            idCarro = Number(idCarro);
            let carro = encontrarCarroPorId(idCarro);

            if (carro === null) {
                console.log("Carro não encontrado");
                mostrarMenu();
                return;
            }

            if (carro.dispo === false) {
                console.log("Carro não está disponível");
                mostrarMenu();
                return;
            }

            rl.question("Quantos dias será alugado: ", (dias) => {
                dias = Number(dias);

                let total = dias * carro.precoDia;

                let aluguel = {
                    id: proximoIdAluguel,
                    idCliente: idCliente,
                    idCarro: idCarro,
                    dias: dias,
                    total: total,
                    status: "ativo"
                };

                alugueis.push(aluguel);
                proximoIdAluguel++;

                carro.dispo  = false;

                console.log("Aluguel realizado com sucesso!");
                console.log("Total: R$ " + total);

                mostrarMenu();
            });
        });
    });
}

function removerCliente() {
    console.log(" Remover Cliente");

    rl.question("Digite o ID do Cliente: ", (id) => {
        id = Number(id);

        for(let i = 0; i < clientes.length; i++){
            if(clientes[i].id === id){
            clientes.splice(i,1)
            console.log("removido com sucesso");
            mostrarMenu();
            return;
            }
        }
        console.log("Cliente não encontrado");
             mostrarMenu();
    })
}

function atualizarCliente() {
    console.log(" Atualizar Cliente");

    rl.question("Digite o ID do Cliente: ", (id) => {
        id = Number(id);
        let cliente = encontrarClientePorId(id);

        if (cliente === null) {
            console.log("cliente não encontrado");
            mostrarMenu();
            return;
        }
        rl.question("Digite o nome do cliente: ", (novoNome) => {
            rl.question("Digite o novo CPF do cliente: ", (novoCPF) => {
                rl.question("Digite o novo telefone do cliente: ", (novoTelefone) => {
                    

                        if (novoNome === "" || novoCPF === "" || novoTelefone === "") {
                            console.log("Todos os dados precisam ser preenchidos");
                            mostrarMenu();
                            return;
                        }
                        

                        cliente.nome = novoNome;
                        cliente.cpf = novoCPF;
                        cliente.telefone = novoTelefone;

                        console.log("atualizado com sucesso");
                        mostrarMenu();
                    
                })
            })
        })
    })


}

function encontrarAlugueisPorId(id) {
    for (let i = 0; i < alugueis.length; i++) {
        if (alugueis[i].id === id) {
            return alugueis[i];
        }
    }

    return null;
}

function encontrarClientePorId(id) {
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id === id) {
            return clientes[i];
        }
    }

    return null;
}

function buscarClientePorId() {
    console.log("Buscar cliente por id");

    rl.question("Digite o ID do Cliente: ", (id) => {
        id = Number(id);

        let cliente = encontrarClientePorId(id);

        if (cliente === null) {
            console.log("cliente não encontrado");
            mostrarMenu();
            return;
        }

        console.log("\nCliente Encontrado");
        console.log("ID: " + cliente.id);
        console.log("Nome: " + cliente.nome)
        console.log("CPF: " + cliente.cpf)
        console.log("Telefone: " + cliente.telefone)

        mostrarMenu()
    })
}

function listarClientes() {
    console.log("Listar Clientes");

    if (clientes.length === 0) {
        console.log("Nenhum cliente cadastrado");
        mostrarMenu();
        return;
    }

    for (let i = 0; i < clientes.length; i++) {
        console.log("\nID: " + clientes[i].id);
        console.log("Nome: " + clientes[i].nome)
        console.log("Idade: " + clientes[i].cpf)
        console.log("Turma: " + clientes[i].telefone)
    }

    mostrarMenu();
}

function cadastrarCliente(){
    console.log("Cadastrar Cliente");

    rl.question("Digite o nome do cliente: ", (nome) => {
        rl.question("Digite o CPF do cliente: ", (cpf) => {
            rl.question("Digite o telefone do cliente: ", (telefone) => {
                
                        if (nome === "" || cpf === "" || telefone === "") {
                            console.log("ERRO: Não preencheu todas as infos");
                            mostrarMenu();
                            return;
                        }
                        let cliente = {
                          id: proximoIdCliente,
                          nome: nome,
                          cpf: cpf,
                          telefone: telefone
                        };

                        clientes.push(cliente);
                        proximoIdCliente++;
                        mostrarMenu();

            })
        })
    })
}

function removerCarro() {
    console.log(" Remover Carro");

    rl.question("Digite o ID do Carro: ", (id) => {
        id = Number(id);

        for(let i = 0; i < carros.length; i++){
            if(carros[i].id === id){
            carros.splice(i,1)
            console.log("removido com sucesso");
            mostrarMenu();
            return;
            }
        }
        console.log("Carro não encontrado");
             mostrarMenu();
    })
}

function atualizarCarro() {
    console.log(" Atualizar Carro");

    rl.question("Digite o ID do Carro: ", (id) => {
        id = Number(id);
        let carro = encontrarCarroPorId(id);

        if (carro === null) {
            console.log("Carro não encontrado");
            mostrarMenu();
            return;
        }
        rl.question("Digite o novo modelo: ", (novoModelo) => {
            rl.question("Digite a nova placa: ", (novaPlaca) => {
                rl.question("Digite o novo ano: ", (novoAno) => {
                   
                        novoAno = Number(novoAno);
                   
                        
                        
                        if (novoModelo === "" || novaPlaca === "" || novoAno === "") {
                            console.log("Todos os dados precisam ser preenchidos");
                            mostrarMenu();
                            return;
                        }
                        

                        carro.modelo = novoModelo;
                        carro.placa = novaPlaca;
                        carro.ano = novoAno;

                        console.log("atualizado com sucesso");
                        mostrarMenu();
                    
                })
            })
        })
    })


}

function buscarCarroPorId() {
    console.log("Buscar Carro por id");

    rl.question("Digite o ID do Carro: ", (id) => {
        id = Number(id);

        let carro = encontrarCarroPorId(id);

        if (carro === null) {
            console.log("Carro não encontrado");
            mostrarMenu();
            return;
        }

        console.log("\nCarro Encontrado");
        console.log("ID: " + carro.id);
        console.log("Nome: " + carro.modelo)
        console.log("Idade: " + carro.placa)
        console.log("Turma: " + carro.ano)
       

        mostrarMenu()
    })
}

function encontrarCarroPorId(id) {
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].id === id) {
            return carros[i];
        }
    }

    return null;
}

function listarCarros(){
    console.log("Listar Carros")

    if (carros.length === 0) {
        console.log("Nenhum Carro cadastrado");
        mostrarMenu();
        return;
    }
    for(let i = 0; i < carros.length; i++){
        console.log("\nID: " + carros[i].id);
        console.log("Modelo: " + carros[i].modelo)
        console.log("Placa: " + carros[i].placa)
        console.log("Ano: " + carros[i].ano)
    }
    mostrarMenu();
}

function cadastrarCarro(){
    console.log("Cadastrar Carro");

    rl.question("Digite o modelo do carro: ", (modelo) => {
        rl.question("Digite a placa do carro: ", (placa) => {
            rl.question("Digite o ano do carro: ", (ano) => {
                rl.question("Digite o preço por dia do carro: ", (precoDia) => {
                        ano = Number(ano);
                        precoDia = Number(precoDia);
                        let dispo = true;
                        if (modelo === "" || placa === "" || ano === "" || precoDia === "" || dispo === "") {
                            console.log("ERRO: Não preencheu todas as infos");
                            mostrarMenu();
                            return;
                        }
                        let carro = {
                            id: proximoIdCarro,
                            modelo: modelo,
                            placa: placa,
                            ano: ano,
                            precoDia: precoDia,
                            dispo: dispo
                        };

                        carros.push(carro);
                        proximoIdCarro++;
                        
                        console.log("Carro cadastrado com sucesso!");
                        mostrarMenu();

                })
            })
        })
    })
}

mostrarMenu()