petshop = new sistema();

const prompt = require("prompt-sync")({sigint: true});

var cadastrado = prompt("possui cadastro? (sim ou nao): ");
if (cadastrado == "nao") {
    let id = prompt("id: ");
    let nome = prompt("nome: ");
    let senha = prompt("senha: ");
    eval(nome) = new funcionario(id, nome, senha);
}

class cliente extends animal {
    constructor(id_cliente, nome_cliente, nome_animal, fidelizado=false) {
        super(nome_cliente, nome_animal)
        this.id_cliente = id_cliente;
        this.fidelizado = fidelizado;
    }

}

class funcionario {
    constructor(id_funcionario, nome_funcionario, senha) {
        this.id_funcionario = id_funcionario;
        this.nome_funcionario = nome_funcionario;
        this.senha = senha;
    }
    get nome() {
        return this.nome_funcionario
    }
    set nome(novo_nome) {
        this.nome_funcionario = novo_nome
    }
    get senha() {
        return this.senha
    }
    set senha(nova_senha) {
        this.senha = nova_senha
    }
}

class animal {
    constructor(id_animal, nome_animal, nome_cliente, num_consultas) {
        this.id_animal = id_animal;
        this.nome_animal = nome_animal;
        this.nome_cliente = nome_cliente;
        this.num_consultas = num_consultas;
    }

}

class consulta {
    constructor(id_consulta, nome_cliente, nome_animal, nome_funcionario, status, data) {
        this.id = id_consulta;
        this.nome_cliente = nome_cliente;
        this.nome_animal = nome_animal;
        this.nome_funcionario = nome_funcionario;
        this.status = status;
        this.data = data;
    }

}

class sistema {
    contructor(cliente = "", funcionario = "", animal = "", consulta = "") {

    }
}

/*
Estive trabalhando nesse código por bastante tempo mas vou mudar ele praticamente todo,
já sabia programar em python mas quase nunca usei classes então estou apanhando um pouco.
vou enviar no email, junto com esse código, uma foto de uma esquematização que estou
tentando montar para ver se clareia um pouco minha cabeça.
*/
