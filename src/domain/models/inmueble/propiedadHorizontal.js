'use-strict';
module.exports = (sequelize, DataTypes) => {
    var PropiedadHorizontal = sequelize.define('Propiedad_Horizontal', {
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_usuario'
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            field: 'username'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            field: 'password'
        },
        estado: {
            type: DataTypes.ENUM, //configurar a ENUM
            allowNull: false,
            values: ['ACTIVO', 'INACTIVO', 'SUSPENDIDO'],
            defaultValue: 'ACTIVO',
            field: 'estado'
        },
        fechaDeCreacion: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: 'fecha_de_creacion'
        },
        fechaDeVencimiento: {
            type: DataTypes.DATE,
            field: 'fecha_de_vencimiento'
        },
        tipoDeUsuario: {
            type: DataTypes.ENUM, //configurar a ENUM,
            allowNull: false,
            values: ['GERENCIA', 'AUXILIAR_DE_GERENCIA'],
            defaultValue: 'GERENCIA',
            field: 'tipo_de_usuario'
        },
        personaId: {
            type: DataTypes.INTEGER,
            field: 'persona_id'
        }
    }, {
        tableName: 'usuario',
        createdAt: false,
        updatedAt: false
    });

    Usuario.associate = (models) => {
        models.Usuario.belongsTo(models.Persona, { foreignKey: 'personaId' });
    };

    return Usuario;
};