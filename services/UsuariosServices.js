const usuarios = require('../databases/usuarios.json');

function listar(){

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

function listarNomes(){

    console.table(usuarios.map(usuario => usuario.nome));
    
}

function buscar(trecho){

    let temTrechoNoNome = usuario => {
        if(usuario.nome.includes(trecho)){
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

function salvar(arrayDeUsuarios){
    const fs = require('fs');
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4));
}

function cadastrar(objeto){
// Seu código aqui
}

function detalhar(idUsuario){
// Seu código aqui
}

function remover(idDoUsuarioParaRemover){
    // Seu código aqui
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
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