const UsuariosServices = require('../services/UsuariosServices.js');

//UsuariosServices.listar();

//UsuariosServices.salvar([{nome: "Felipe", idade: 51}, {nome: "Maria", idade: 49}]);

//UsuariosServices.detalhar(129); 

//UsuariosServices.listarNomes();

//UsuariosServices.remover(5);

// let novoUsuario = {
//         nome: "Maria Cleunice",
//         email: "email@dousuario.com",
//         senha: "senha_do_usuario_sem_criptografar",
//         endereco: "Rua dos usuários, nº 256. Usuariolândia-BA"
//     }

//UsuariosServices.cadastrar(novoUsuario); 

//UsuariosServices.cadastrarArray(objeto,array);

// let novosDados = {
//         nome: "Marcos da Silva",
//         email: "marcos@email-do-marcos.com",
//         senha: "nova-senha"
//     }

//UsuariosServices.alterar(novosDados, 132)

let enderecoAdicionado = ["Novo Endereço Teste, nº50, Jardim Novo Endereço"];
UsuariosServices.addEndereco(enderecoAdicionado, 132);
