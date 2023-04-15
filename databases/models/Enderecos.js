module.exports = (sequelize, DataTypes) => {
    
    const Enderecos = sequelize.define(
        'Enderecos',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncremente: true,
                allowNull: false,
                primaryKey: true
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            endereco: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tableName: 'enderecos',
            timestamps: false
        }

        )
        Enderecos.associate = (models) => {
            Enderecos.belongsTo(
                models.Usuarios,
                    {as: "usuario", foreignKeys: "usuario_id"})
        }

        return Enderecos;
    }