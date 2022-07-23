const express = require('express');
const produtoController = require('../controllers/produtoController');
const usuariosController = require('../controllers/usuariosController');
const requestLog = require('../middlewares/requestLog');
const bloqueio = require('../middlewares/bloqueio');
const usuarioCreateValidation = require('../validations/usuarios/create')
const routes = express.Router();

routes.get("/produtos", requestLog, bloqueio, produtoController.listarProdutos );
routes.post("/produtos", produtoController.cadastrarProduto);
routes.delete("/produtos/:id", produtoController.deletarProduto);
routes.put("/produtos/:id", produtoController.atualizarProduto);


routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);

module.exports = routes;