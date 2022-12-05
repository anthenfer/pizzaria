const bcrypt = require('bcrypt'); //biblioteca importada para criptografar a senha
const usuarios = require('../databases/usuarios.json'); //Para registrar um novo array em usuarios.json
const fs = require('fs');

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
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4));
}

function cadastrar(objeto) {

    let senhaCriptografada = bcrypt.hashSync(objeto.senha, 10); //Para criptografar a senha
    let novoId = usuarios[usuarios.length -1].id + 1;
    
    let usuarioEsperado = {
        id: novoId, 
        nome: objeto.nome,
        email: objeto.email,
        senha: senhaCriptografada,
        endereco: [objeto.endereco],
        formasDePagamento: []
    }

    usuarios.push(usuarioEsperado);
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(usuarios, null, 4));
}

function cadastrarArray(objeto,array){
    // console.log(array);

    //Calculando campo maiorDeIdade
    let maiorIdade = true;
    if(objeto.idade < 18){
        maiorIdade = false;
    }

    let objetoFormatado = {
        id: 11,
        nome: objeto.nome,
        sobrenome: objeto.sobrenome,
        idade: objeto.idade,
        dependentes: objeto.dependentes,
        maiorDeIdade: maiorIdade,
        email: objeto.email,
        senha: "123"
    }


    //Adicionando objeto dentro do array
    array.push(objetoFormatado);
    // console.log(array);

    //Salvar no arquivo usuarios.json
    //Usar o módulo File System para escrever dentro do arquivo json
    fs.writeFileSync("./databases/usuarios.json",JSON.stringify(array,null,4)); 

}

function detalhar(idUsuario) {

    //function detalhar(id,array){
    const usuario = usuarios.find(item => item.id == idUsuario);
    console.log("Nome: " + usuario.nome); 
    console.log("E-mail: " + usuario.email);   
    console.log("Endereços: ");
    console.table(usuario.enderecos);
    console.log("Formas de pagamentos: ");
    console.table(usuario.formasDePagamento);

}

function remover(idDoUsuarioParaRemover) {
    //usuarios referente a 'const = usuarios' que está se referindo 
    const posicaoUsuario = usuarios.findIndex(item => item.id == idDoUsuarioParaRemover)   
    //console.log(posicaoUsuario);

    //Removendo um usuario do array de usuarios.json  
    //A função splice recebe dois argumento dentro dos parenteses, o primeiro determina a posição do primeiro item a ser excluído
    //E o segundo argumento determina o numero de elementos a serem excluídos. 
    usuarios.splice(posicaoUsuario, 1);
    console.log(usuarios);

    //Salvando alterações no arquivo usuarios.json
    salvar(usuarios);
}

function alterar(novosDados, idUsuario) {
    //Procurando o usuario de acordo com o id recebido na função
    const usuario = usuarios.find(item => item.id == idUsuario)

    let senhaCriptografada = bcrypt.hashSync(novosDados.senha, 10);

    //Verificando se o usuario foi encontrado:
    if(usuario != undefined){
    //Se for encontrado, alteramos os dados
        usuario.nome = novosDados.nome
        usuario.email = novosDados.email
        usuario.senha = senhaCriptografada
    }else{
    //Se não for encontrado, mostra mensagem abaixo    
        console.log("Usuario não encontrado");
    }
    
    //Para salvar em usuarios.json
    salvar(usuarios);
}

function addEndereco(novoEndereco, idUsuario) {

    //Procurando um usuario com o id recebido
    const usuario = usuarios.find(item => item.id == idUsuario)
    console.log(usuario);
    //Verificando se existe o usuario
    if(usuario != undefined){
    //Se existe, adicionar novo endereço    
        usuario.endereco.push(novoEndereco)
    } else {
        console.log("Endereço não adicionado")
    }

    // Seu código aqui
    // Objetivo: A função deve adicionar um novo endereço no array de endereços do usuário e atualizar o arquivo usuarios.json
    //     Essa função recebe dois parametros.
    //     O primeiro, uma string contendo um novo endereço.
    //     O segundo, o id do usuário que terá adicionado o novo endereço.
    //     Essa função não retorna nada.

    //Para adicionar o array usar o .push 
    //Olhar novamente função alterar / detalhar 

    //Salvando no arquivo JSON, declarar o array onde será salvo (______,null,4);
    salvar(usuarios); 
}

function removerEndereco(posicaoDoEndereco, idUsuario) {
    
    //Procurando um usuario com o id recebido
    const usuario = usuarios.find(item => item.id == idUsuario)

    //Aplicando condição
    if (usuario != undefined){ 
        usuario.endereco.splice(posicaoDoEndereco, 1)
    }else {
        console.log("Usuário não encontrado!")
    }
    //Removendo um usuario do array de usuarios.json  
    //A função splice recebe dois argumento dentro dos parenteses, o primeiro determina a posição do primeiro item a ser excluído
    //E o segundo argumento determina o numero de elementos a serem excluídos. 
    //usuario.endereco.splice(posicaoDoEndereco, 1)
    salvar(usuarios);
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario) {
    // Objetivo: A função deve alterar um endereço de um usuário.
    // Essa função deve receber três parâmetros.
    // O primeiro, a posicao do endereco no array de enderecos do usuário
    // O segundo, uma string contendo o novo endereço.
    // O terceiro, o id do usuário que terá um endereço alterado

    //Procurando um usuario com o id recebido
    const usuario = usuarios.find(item => item.id == idUsuario)
    
    if(usuario != undefined){
        //Atribuindo um novo endereço para o usuario ' sempre utilizar o sinal de = '
        usuario.endereco[posicaoDoEndereco] = novoEndereco
    } else {
        console.log("Usuário não encontrado")
    }
    
    salvar(usuarios);
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario) {
    // Objetivo: A função deve adicionar uma nova forma de pagamento no array de formasDePagamento do usuário e atualizar o arquivo usuarios.json
    // Essa função recebe dois parametros.
    // O primeiro, uma string contendo a nova forma de pagamento.
    // O segundo, o id do usuário que terá adicionada a nova forma de pagamento.
    // Essa função não retorna nada.

    //Procurando um usuario com o id recebido
    const usuario = usuarios.find(item => item.id == idUsuario)

    //Aplicando condição: adicionando no array 'formasDePagamento' a 'novaFormaDePagamento' 
    //que a função recebe direto como parametro...
    if(usuario != undefined){
        usuario.formasDePagamento.push(novaFormaDePagamento)
    }else{
        console.log("Forma de pagamento já existe!")
    }

    //Chamando a função salvar para atualizar o arquivo usuarios.json
    salvar(usuarios);
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario) {
    // Objetivo: A função deve remover a forma de pagamento especificada de um usuário.
    // Essa função deve receber dois parâmetros.
    // O primeiro, a posicao da forma de pagamento no array de formas de pagamento do usuário
    // O segundo, o id do usuário que terá o array removido
    // Essa função não retorna nada.

    //Procurando um usuario com o id recebido
    const usuario = usuarios.find(item => item.id == idUsuario)
    if(usuario != undefined){

        //usuarios referente a 'const = usuarios' que está se referindo 
    const posicaoDaFormaDePagamentoParaRemover = usuarios.findIndex(item => item.id == posicaoDaFormaDePagamento);
        //Usando o slice para identificar a posição e remover do array usuarios.json
    usuarios.splice(posicaoDaFormaDePagamentoParaRemover, 1);
    
    } else {
        console.log("Usuário não encontrado")
    }
  
    //Salvar e atualizar o arquivo usuarios.json
    salvar(usuarios);
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario) {
    //Encontrando o usuário por ID
    const usuario = usuarios.find(item => item.id == idUsuario)
    

    if(usuario != undefined){
        //Atribuindo um novo endereço para o usuario ' sempre utilizar o sinal de = '
        usuario.formasDePagamento[posicaoDaFormaDePagamento] = novaFormaDePagamento;
    } else {
        console.log("Usuário não encontrado")
    }
    
    salvar(usuarios);
}

const UsuariosServices = {
    cadastrar,
    cadastrarArray,
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