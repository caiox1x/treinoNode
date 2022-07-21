const db = require("../database");
const {DataTypes} = require("sequelize")

const Produtos = require("./Produtos")
const Categorias = require("./Categorias")


const CategoriaProduto = db.define("CategoriaProduto", {
    produto_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Produtos,
            Key: "id",
        },
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Categorias,
            Key: "id",
        },
    },
    createdAt:{
        type: DataTypes.DATE,
    },
    updatedAt:{
        type: DataTypes.DATE,
    },
},
    {
        tableName: "categoria_produto",
    }
);

module.exports = CategoriaProduto;