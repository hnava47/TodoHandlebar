const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validators: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validators: {
                len: [6]
            }
        }
    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        modelName: 'user'
    }
);

module.exports = User;
