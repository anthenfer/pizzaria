module.exports = (sequelize, DataTypes) => {
    
    const Ingredientes = sequelize.define(
        'Ingredientes', 
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            timestamps: false,
            tableName: "ingredientes"
        }
    )

    return Ingredientes;

}