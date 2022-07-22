const express = require('express');
const produtoController = require('../controllers/produtoController')
const requestLog = require ("../middlewares/requestLog")
const bloqueio = require ("../middlewares/bloqueio")
const routes = express.Router();

routes.get("/produtos", requestLog, bloqueio, produtoController.listarProdutos );
routes.post("/produtos", requestLog, bloqueio, produtoController.cadastrarProduto);
routes.delete("/produtos/:id", requestLog, bloqueio, produtoController.deletarProduto);
routes.put("/produtos/:id", requestLog, bloqueio, produtoController.atualizarProduto);



module.exports = routes;