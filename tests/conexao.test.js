
//Importando o sequelize
const sequelize = require('sequelize');

//Importar configurações
const config = require("../databases/config").development;

//Criar conexão com o banco de dados
const conexao = new sequelize(config);

//Executar uma consulta 
const sql = `SELECT
                p.id,
                p.nome,
                ifnull(SUM(pp.quantidade), 0) as quantidade
            FROM
                pizzas as p
                LEFT JOIN pedido_pizza as pp ON p.id = pp.pizza_id
            group by p.id, p.nome;`

const promise = conexao.query(sql, {type: sequelize.QueryTypes.SELECT});
// console.log(promise);

promise.then(
    data => {
        console.log(data)
        conexao.close()
    }
);
