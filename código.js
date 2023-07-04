const prompt = require("prompt-sync")({sigint: true});

class cliente{
    constructor(id_cliente, nome_cliente, nome_animal, fidelizado=false) {
        this.id_cliente = id_cliente;
        this.nome_cliente = nome_cliente;
        this.nome_animal = nome_animal;
        this.fidelizado = fidelizado;
    }

}

class funcionario{
    constructor(id_funcionario, nome_funcionario, senha_funcionario, consultas = []) {
        this.id_funcionario = id_funcionario;
        this.nome_funcionario = nome_funcionario;
        this.senha_funcionario = senha_funcionario;
        this.consultas = consultas;
    }
}

class animal{
    constructor(id_animal, nome_animal, nome_cliente, num_consultas = 0) {
        this.id_animal = id_animal;
        this.nome_animal = nome_animal;
        this.nome_cliente = nome_cliente;
        this.num_consultas = num_consultas;
    }

}

class consulta{
    constructor(id_consulta, nome_cliente, nome_animal, nome_funcionario, data, status = true) {
        this.id = id_consulta;
        this.nome_cliente = nome_cliente;
        this.nome_animal = nome_animal;
        this.nome_funcionario = nome_funcionario;
        this.data = data;
        this.status = status;
    }

}

class sistema {
    constructor() {
        this.clientes = {};
        this.funcionarios = {};
        this.animais = {};
        this.consultas_marcadas = {};
    }

    get consultas() {
        return this.consultas_marcadas;
    }

    get funcionarios_registrados() {
        return this.funcionarios;
    }

    get animais_registrados() {
        return this.animais;
    }

    get clientes_registrados() {
        return this.clientes;
    }

    nova_consulta(id_consulta, nome_cliente, nome_animal, nome_funcionario, data) {
        this.consultas[id_consulta] = new consulta(id_consulta, nome_cliente, nome_animal, nome_funcionario, data);
        this.funcionarios[nome_funcionario].consultas.push(id_consulta);
    }

    novo_cliente(id_cliente, nome_cliente, nome_animal) {
        this.clientes[id_cliente] = new cliente(id_cliente, nome_cliente, nome_animal);
    }


    novo_animal(id_animal, nome_animal, nome_cliente) {
        this.animais[id_animal] = new animal(id_animal, nome_cliente, nome_animal);
    }

    get consultas() {
        return this.funcionarios[nome_login].consultas;
    }

    get nome() {
        return this.funcionarios[nome_login].nome_funcionario;
    }

    get senha() {
        return this.funcionarios[nome_login].senha;
    }

    set senha(nova_senha) {
        this.funcionarios[nome_login].senha = nova_senha
    }

    remover_funcionario(funcionario_escolhido) {
        if (this.funcionarios[funcionario_escolhido].consultas == []) {
            delete (this.funcionarios.funcionario_escolhido);
        } else {
            console.log('Impossível deletar funcionário com consultas pendentes');
        }
    }

    iniciar() {
        let ligado = true;
        while (ligado) {
            console.log('1. Registrar');
            console.log('2. Logar');
            console.log('3. Encerrar programa');
            var opcao1 = prompt('Escolha: ');
            switch (opcao1) {
                case '1':
                    let id = prompt("id: ");
                    let nome = prompt("nome: ");
                    let senha = prompt("senha: ");
                    this.funcionarios[nome] = new funcionario(id, nome, senha);
                    break;
                case '2':
                    this.nome_login = prompt("nome: ");
                    let senha_login = prompt("senha: ");
                    if (this.funcionarios[this.nome_login].senha_funcionario == senha_login) {
                        let logado = true;
                        while (logado) {
                            console.log('1. Adicionar cliente');
                            console.log('2. Adicionar animal');
                            console.log('3. Adicionar consulta');
                            console.log('4. Remover funcionario');
                            console.log('5. Remover animal');
                            console.log('6. Remover consulta');
                            console.log('7. Remover cliente');
                            console.log('8. Alterar senha');
                            console.log('9. Sair de conta');
                            var opcao2 = prompt('Escolha: ');
                            switch (opcao2) {
                                case '1':
                                    let id_cliente = prompt('id: ');
                                    let nome_cliente = prompt('nome: ');
                                    let animal = prompt('animal: ');
                                    this.novo_cliente(id_cliente, nome_cliente, animal);
                                    break;
                                case '2':
                                    let id_animal = prompt('id: ');
                                    let nome_animal = prompt('nome: ');
                                    let cliente = prompt('cliente: ');
                                    this.novo_animal(id_animal, nome_animal, cliente);
                                    break;
                                case '3':
                                    let id = prompt('id: ');
                                    let cliente_marcado = prompt('cliente: ');
                                    let animal_marcado = prompt('animal: ');
                                    let funcionario_marcado = prompt('funcionario: ');
                                    let data = prompt('data: '); 
                                    this.nova_consulta(id, cliente_marcado, animal_marcado, funcionario_marcado, data);
                                    break;
                                case '4':
                                    let funcionario_remover = prompt('Qual funcionário: ');
                                    this.remover_funcionario(funcionario_remover);
                                    console.log(this.funcionarios);
                                    break;
                                case '5':

                                case '6':

                                case '7':

                                case '8':

                                case '9':
                                    logado = false
                                    break;
                                default:
                                    console.log('Escolha inválida')
                                    break;
                        
                            }
                        }
                    } else {
                        console.log('Usuário inválido.');
                        break;
                    }
                    break;
                case '3':
                    ligado = false;
                    break;

                default:
                    console.log('Escolha inválida.');
                    break;
            }
        }
    }
}

petshop = new sistema();

petshop.iniciar();

/*
dei o meu melhor nesse código com o prazo que eu tinha mas infelizmente não consegui terminar,
tive que aprender uma quantidade grande de coisas pra fazer ele e esse processo todo engoliu
meu final de semana e minha segunda feira. Espero que o esforço conte, estava chegando em um
produto legal e até tinha vontade de terminar mas não dará tempo, cheguei até a modificar meu
código inteiro em relação ao qual apresentei na entrega parcial mas nesse tempo foi o que consegui.
*/
