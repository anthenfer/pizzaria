const PizzasServices = require("../services/PizzasServices");

const AdmController = {
    listarPizzas: (req,res) => {
        //carregar as pizzas
        const pizzas = PizzasServices.carregarPizzas();
        //Renderizar a view listar-pizzas, passando as pizzas para ela
        res.render('lista-de-pizzas.ejs', {pizzas})
    },
    criarPizza: (req,res) => {
        //Criar novas pizzas apartir de link
        res.render('form-add-pizza.ejs');
    },
    gravarPizza: (req,res) => {
        //res.body: carrega as info pelo usuário

        //Criar um objeto pizza
        let pizza = {
            nome: req.body.nome,
            preco: Number(req.body.preco),
            ingredientes: req.body.ingredientes
        }

        //Salvar esse objeto no array de pizzas
        PizzasServices.adicionarPizza(pizza);

        //Redirecionar o usuario para a lista de pizzas
        res.redirect('/adm/pizzas');
        }
    }


module.exports = AdmController;