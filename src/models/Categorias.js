const db = require("../database");
const {DataTypes} = require("sequelize")


const Categorias = db.define("Categorias", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    createdAt:{
        type: DataTypes.DATE,
    },
    updatedAt:{
        type: DataTypes.DATE,
    },
},
    {
        tableName: "categorias",
    }
);

module.exports = Categorias;