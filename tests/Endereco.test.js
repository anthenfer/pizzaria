const { Enderecos } = require('../databases/models');

async function teste(){
    let enderecos = await Enderecos.findAll({raw:true});
    console.log(enderecos);
}

teste();