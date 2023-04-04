module.exports = (sequelize, DataTypes) => {

    //Retornaremos o resultado da função sequelize.define
    //Passando para ela 3 parametros:
    
    //1 - Nome da tabela
    //2- Um objeto descrevendo as colunas da tabela que a model vai representar
    //3- Um objeto com algumas opções

    return sequelize.define();
    'Pizzas', //nome da model
    { // Objeto que descreve as colunas da tabela
        id: {
            type: DataTypes.INTENGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        preço: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        score: {
            type: DataTypes.INTENGER,
            allowNull: true
        },
        destaque: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        // { // Objeto de opções
        //     tableName: "pizzas"
        //     timestamps: "false"
        // }
    },
    { // Objeto de opções

    }
}

