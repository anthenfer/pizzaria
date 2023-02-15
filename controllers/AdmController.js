const PizzasServices = require("../services/PizzasServices");

const AdmController = {
    listarPizzas: (req, res) => {
        //carregar as pizzas
        const pizzas = PizzasServices.carregarPizzas();
        //Renderizar a view listar-pizzas, passando as pizzas para ela
        res.render('lista-de-pizzas.ejs', { pizzas })
    },
    criarPizza: (req, res) => {
        //Criar novas pizzas apartir de link
        res.render('form-add-pizza.ejs');
    },
    gravarPizza: (req, res) => {
        //res.body: carrega as info pelo usuário

        //Criar um objeto pizza
        let pizza = {
            nome: req.body.nome,
            ingredientes: req.body.ingredientes.split(',').map(e => e.trim()),
            preco: Number(req.body.preco),
            img: "/img/no-image.png",
            destaque: false,
            score: 0
        }

        //Salvar esse objeto no array de pizzas
        PizzasServices.adicionarPizza(pizza);

        //Redirecionar o usuario para a lista de pizzas
        res.redirect('/adm/pizzas');
    },
    showEditPizza: (req, res) => {
        //Capturar o id da pizza a ser editada  (req.params)

        //Encontrar a pizza a ser editada guardando na variavel pizza (PizzasServices.carregarPizza)

        //renderizar a view (ainda inexistente) form-edit-pizza.ejs
        //passando para essa view (res.render(____, {pizza}));
    }
}


module.exports = AdmController;