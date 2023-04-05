// const { Usuarios } = require('../databases/models');

// async function teste(){
//     let usuarios = await Usuarios.findAll({raw:true});
//     console.log(usuarios);
// }

// teste();

const { Usuarios } = require('../databases/models');

async function teste(){
    let usuario = await Usuarios.findByPk(2, {include: "enderecos"});
    console.log(usuario.toJSON());
}

teste();