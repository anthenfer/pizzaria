const fs = require('fs');
const pizzas = require('../databases/pizzas.json');

function cadastrarPizza(objeto){
//console.log(objeto.nome);
    let novoId = pizzas[pizzas.length - 1].id + 1;

//Adicionar esse novo id ao objeto pizza == não saberia fazer
    let novaPizza = {
        id: novoId,
        nome: objeto.nome,
        ingredientes: objeto.ingredientes,
        preco: objeto.preco,
        img: objeto.img
    }   

//Salvar no array de pizza
    pizzas.push(novaPizza);
//console.log(pizzas);
     fs.writeFileSync('./databases/pizzas.json', JSON.stringify(pizzas, null, 4));
};

let pizza = {
    "nome": "Peperoni",
    "ingredientes": [
        "mussarela",
        "calabresa",
        "cebola"
    ],
}

// console.log(pizza.preco);
cadastrarPizza(pizza);