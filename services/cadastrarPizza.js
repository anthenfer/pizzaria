const fs = require('fs');
const pizzas = require('../databases/pizzas.json');

function cadastrarPizza(objeto){

    //Descobrir novo Id da pizza == não saberia fazer
    let novoId = pizzas[pizzas.length - 1].id + 1;
//Tentei pensar, mas era só copiado e colado novamente
    
    //Adicionar esse novo id ao objeto pizza == não saberia fazer
    let novaPizza = {
        id: novoId,
        nome: objeto.nome,
        ingredientes: objeto.ingredientes,
        preco: objeto.preco,
        img: objeto.img
    }   

    //Salvar a pizza no array de pizzas == não saberia fazer
    pizzas.push(novaPizza);
    //exemplo dado: salvar(pizzas);
    fs.writeFileSync('./databases/pizzas.json', JSON.stringify(pizzas, null, 4));
};

 

let pizza = {
    "id": 1,
    "nome": "Calabresa",
    "ingredientes": [
        "mussarela",
        "calabresa",
        "cebola"
    ],
    "preco": 38.5,
    "img": "/img/calabresa.jpg",
    "destaque": true,
    "score": 27
}


//Porque que 'pizza' está no singular? 
cadastrarPizza(pizza);