const bcrypt = require('bcrypt');
const usuarios = require('../databases/usuarios.json');
const fs = require('fs');

function cadastrarUsuario(objeto){

    //Determine o novo id do último usuário mais um
    let senhaCriptografada = bcrypt.hashSync(objeto.senha,10);
    let novoId = usuarios[usuarios.length -1].id + 1;//O id do último usuario do array + 1

    //Criem um objeto usuario com os dados "lapidados"
    //Duvida 03: porque o id.usuarios está no plural e a váriavel usuario no singular? 
    let usuario = {
        id: novoId,
        nome: objeto.nome,
        email: objeto.email,
        senha: senhaCriptografada,
        enderecos: [objeto.endereco],
        formasDePagamento: []
    }

    //Adicionar o objeto ao final do array usuarios (usuarios.push)
    usuarios.push(usuario);

    // **** Salvar o ARRAY DE USUARIOS no arquivo
    //salvar(usuarios);
    fs.writeFileSync("./databases/usuarios.json", JSON.stringify(usuarios,null,4));
}

//Para testar foi criado esse objeto: 
//Dúvida 01: não tem problema mais uma váriavel declarada no mesmo nome? 
//Dúvida 02: porque que em 'usuarios.json' os objetos ficam sempre com aspas duplas, e os objetos fora dele não, como no caso da váriavel 'let = usuarios'

let usuarioDeTeste = {
    nome: "Raul das Flores",
    email: "raul@dasflores.com",
    senha: "123456",
    endereço: "Rua das Camélias, 99"
}

cadastrarUsuario(usuarioDeTeste);