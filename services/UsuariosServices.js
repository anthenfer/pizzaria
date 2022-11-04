const usuarios = require('../databases/usuarios.json');

function listar() {

    const formatUsuario = usuario => {
        return {
            index: usuario.index,
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }
    }
    let usuariosFormatados = usuarios.map(formatUsuario);

    console.table(usuariosFormatados);
}

function listarNomes() {

    console.table(usuarios.map(usuario => usuario.nome));

}

function buscar(trecho) {

    let temTrechoNoNome = usuario => {
        if (usuario.nome.includes(trecho)) {
            return true;
        } else {
            return false;
        }
        //Jeito complicado que não entendi
        // let temTrechoNoNome = usuario => {
        // return usuario.nome.includes(trecho);
        //};

        //Complicando mais ainda usando arrow function
        // let temTrechoNoNome = usuario => usuario.nome.includes(trecho)   
    }
    let usuariosComNomesBuscados = usuarios.filter(temTrechoNoNome);

    return usuariosComNomesBuscados;
    //Retornar um array com os usuários que tenham nome contendo o trecho buscado
}

function salvar(arrayDeUsuarios) {
    const fs = require('fs');
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4));
}

function cadastrar(objeto) {

    const bcrypt = require('bcrypt'); //biblioteca importada para criptografar a senha
    const usuarios = require('../databases/usuarios.json'); //Para registrar um novo array em usuarios.json
    const fs = require('fs');

    let senhaCriptografada = bcrypt.hashSync(objeto.senha, 10); //Para criptografar a senha
    let novoId = usuarios[usuarios.length -1].id + 1;
    
    let usuarioEsperado = {
        id: novoId, 
        nome: objeto.nome,
        email: objeto.email,
        senha: senhaCriptografada,
        endereco: [objeto.endereco]
    }

    usuarios.push(usuarioEsperado);
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(usuarios, null, 4));

    let usuarioDeTeste = 
{
    "nome": "Antonio Henrique Ferreira",
    "email": "antonio@henriqueferreira.com",
    "senha": "abcdef",
    "endereço": "Rua dos Desesperados, 123"
};

cadastrar(usuarioDeTeste);
}

function detalhar(idUsuario) {

    //console.table, talvez? 

    // Objetivo: Essa função deve mostrar detalhes de um determinado usuário.
    //     Os detalhes devem ser exibidos desta forma;
    
    //     Nome: Nome do Usuário
    //     E-mail: email@do-usuario.com

    //     Endereços
    //     ┌─────────┬───────────────────────┐
    //     │ (index) │        Values         │
    //     ├─────────┼───────────────────────┤
    //     │    0    │ 'Rua benevides, 33'   │
    //     │    1    │ 'Av das Palmas, 123'  │
    //     └─────────┴───────────────────────┘
        
    //     Formas de Pagamento
    //     ┌─────────┬───────────────────────┐
    //     │ (index) │        Values         │
    //     ├─────────┼───────────────────────┤
    //     │    0    │ '1234 1234 1234 1234' │
    //     │    1    │ '1234 1234 1234 1236' │
    //     └─────────┴───────────────────────┘
        
    //     Essa função deve receber o id de um usuário.
    //     Ela não deve retornar nada.
    const detalharUsuario = idUsuario => {
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            formasDePagamentos: usuario.formasDePagamentos
        }
    }
    let usuariosDetalhados = idUsuarios.map(detalharUsuario);

    console.table(usuariosDetalhados);
}

function remover(idDoUsuarioParaRemover) {
    // Seu código aqui
    // Objetivo: A função deve remover um usuário do arquivo usuarios.json a partir do seu id.
    // Essa função deve receber o id de um usuário.
    // Ela não deve retornar nada.
  
}

function alterar(novosDados, idUsuario) {
    // Seu código aqui
    // Objetivo: A função deve alterar os dados de pessoais de um usuário (nome, email e senha).
    // Ela recebe dois parâmetros.
    // O primeiro, um objeto no seguinte formato
    // {
    //     nome: "Novo Nome do Usuário da Silva",
    //     email: "novo@email-do-usuario.com",
    //     senha: "nova-senha-sem-criptografar"
    // }
    // O segundo, o id do usuário que terá seus dados alterados.
    // A senha deve ser armazenada criptografada.
    // Essa função não retorna nada
}

function addEndereco(novoEndereco, idUsuario) {
    // Seu código aqui
    // Objetivo: A função deve adicionar um novo endereço no array de endereços do usuário e atualizar o arquivo usuarios.json
    //     Essa função recebe dois parametros.
    //     O primeiro, uma string contendo um novo endereço.
    //     O segundo, o id do usuário que terá adicionado o novo endereço.
    //     Essa função não retorna nada.
}

function removerEndereco(posicaoDoEndereco, idUsuario) {
    // Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario) {
    // Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario) {
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario) {
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario) {
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    listarNomes,
    salvar,
    buscar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;