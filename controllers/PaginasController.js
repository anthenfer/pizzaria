const path = require('path');

const PaginasController = {

    showIndex: (req, res) => {
        return res.sendFile(path.resolve("views/index.html"));
    },
    showCarrinho: (req,res) =>{
        console.log("Chegou uma requisição!")
        return res.sendFile(path.resolve("views/carrinho.html"));
    }, 
    showPerfil: (req, res)=>{
        return res.sendFile(path.resolve("views/perfil.html"));
    },
    showCadastro: (req, res)=>{
        return res.sendFile(path.resolve("views/cadastro.html"));
    },
    showPizza: (req, res)=>{
        let id = req.params.idDaPizza;

        //Importar o array de pizza;
        const pizzas = require('..databases/pizzas.json');

        //Localizar a pizza pelo id;
        const pizza = pizza.find( p => p.id == id);

        //Mandar a pizza a ser exibida;
        return res.send(pizzas);
    },

}
module.exports = PaginasController;