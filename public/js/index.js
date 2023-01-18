//FORMAS DE SELECIONAR ELEMENTOS da página
let campoDeBusca = document.getElementById("campo-de-busca");
console.log(campoDeBusca);

//** querySelector: document.querySelector('#seletor .css')"*/

let btBuscar = document.querySelector(".btBuscar");
console.log(btBuscar);

//Tentando capturar o elemento main 
let main = document.querySelector("main");
console.log(main) //Porém, se usar getElementsByTagName aqui será tratado como array; 
 //Logo, nesse caso, é mais indicado o querySelector
 main.style.backgroundColor = "red";

 let pizzasNoMenu = [
    {
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
    },
    {
        "id": 2,
        "nome": "Pepperoni",
        "ingredientes": [
            "mussarela",
            "pepperoni",
            "cebola"
        ],
        "preco": 48.55,
        "img": "/img/pepperoni.jpg",
        "destaque": false,
        "score": 24
    },
    {
        "id": 3,
        "nome": "Fracatu",
        "ingredientes": [
            "mussarela",
            "frango",
            "catupiry",
            "cebola"
        ],
        "preco": 38.5,
        "img": "/img/fracatu.jpg",
        "destaque": true,
        "score": 12
    },
    {
        "id": 4,
        "nome": "Marguerita",
        "ingredientes": [
            "mussarela",
            "tomate",
            "manjericão"
        ],
        "preco": 33.5,
        "img": "/img/marguerita.jpg",
        "destaque": false,
        "score": 3
    },
    {
        "id": 5,
        "nome": "Quatro Queijos",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 3
    },
    {
        "id": 6,
        "nome": "Portuguesa",
        "ingredientes": [
            "cebola",
            "pimentão",
            "ovo",
            "mussarela",
            "presunto"
        ],
        "preco": 40.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 3
    },
    {
        "id": 7,
        "nome": "Quatro Queijos",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 3
    },
    {
        "id": 8,
        "nome": "Caipira",
        "ingredientes": [
            "mussarela",
            "milho verde",
            "frango"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 2
    },
    {
        "id": 9,
        "nome": "Napolitana",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 55.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 1
    },
    {
        "id": 10,
        "nome": "Baiana",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 1
    },
    {
        "id": 11,
        "nome": "Meat & Bacon",
        "ingredientes": [
            "mussarela",
            "calabresa",
            "bacon"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true
    },
    {
        "id": 12,
        "nome": "Rúcula",
        "ingredientes": [
            "mussarela",
            "rúcula",
            "tomate seco"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 1
    },
    {
        "id": 13,
        "nome": "Dezoito Queijos",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 3
    }
]

 //Criar um elemento e adicionar
 // o elemento no final da main

 //Criando uma função para mostrar a pizza
    let pizzaDePepperoni = {
        "id": 2,
        "nome": "Pepperoni",
        "ingredientes": [
            "mussarela",
            "pepperoni",
            "cebola"
        ],
        "preco": 48.55,
        "img": "/img/pepperoni.jpg",
        "destaque": false,
        "score": 24
    }


// <<<<< ----- Funções que manipulam a DOM ------ >>>>>>>

    function showPizza(pizza){

    let article = document.createElement("article");
    article.innerHTML = //Usasse ${} para template string
            ` 
        <img src="${pizza.img}" alt="${pizza.nome}">
        <h2>${pizza.nome}</h2>
        <span>${pizza.preco}</span>
        <a href="${pizza.id}">Ver mais</a>
        <button>Add+</button>
            `
//append é adicionar um filho ao final, que seria o article criado

main.appendChild(article);

}

    function showPizzas(pizzas){

        //Limpando o elemento main
        main.innerHTML = '';    

        //Forma 1: Elegante, linda e gatinha
        pizzas.forEach(showPizza);

    //     //Forma 2: Bonitinha
    //     for (const pizza of pizzas) {
    //         showPizza(pizza);
    //     }

    //     //Forma 3: Feia
    //     for (let i = 0; i < pizzas.length; i++) {
    //         showPizza (pizzas[i]);
    //     }
    };


//Fazendo uma função que consiga buscar o trecho buscado, e
//a função deve retornar todas as pizzas que exister no array com 
//o trecho do nome buscado


// <<<<<<< ----- Funções auxiliares ------ >>>>>>>
function filtrarPizzas(pizzas, trechoBuscado){
    let pizzasFiltradas = pizzas.filter(
        pizza => pizza.nome.toUpperCase().includes(trechoBuscado.toUpperCase())
    );
    return pizzasFiltradas;
}  

// Funções de associação de eventos -----------------
function onCampoDeBuscaKeyup(){
    //Capturar o trecho de busca pelo usuário 
    const trechoBuscado = campoDeBusca.value;
    //Criar um array com as pizzas filtradas
    const pizzasFiltradas = filtrarPizzas(pizzasNoMenu, trechoBuscado)
    //Mostrar as pizzas filtradas
    showPizzas(pizzasFiltradas);
}

// Associando a execução de uma função a um evento.
// Comando de inicialização da página ---------------
campoDeBusca.addEventListener('keyup', onCampoDeBuscaKeyup);
showPizzas(pizzasNoMenu); 