const { Enderecos, sequelize } = require('../databases/models');

async function teste(){
    let enderecos = await Enderecos.findAll({include: "usuario"});
    console.log(enderecos.map( e => e.toJSON()));
    sequelize.close();
}

teste();