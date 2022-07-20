const Sequelize = require("sequelize");

const DB_NAME = "loja"
const DB_USER = "root"
const DB_PASS = "Tcm@08101999"
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
};

//objeto onde vai a conexão com o banco de dados
let db = {};

try{
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
} catch(error){
    console.error("Erro ao conectar com BD");
}

async function hasConnection() {
    try {
        await db.authenticate();
        console.log("Banco de dados conectado");
    } catch (error) {
        console.error("Erro ao tentar se conectar ao banco de dados");
    }
}

Object.assign(db, {
    hasConnection,
});

module.exports = db;