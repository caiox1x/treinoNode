const express = require('express');
const produtoController = require('../controllers/produtoController')
const routes = express.Router();

routes.get("/produtos/lista", produtoController.listarProdutos );
routes.post("/produtos/cadastrar", produtoController.cadastrarProduto);
routes.delete("/produtos/:id/deletar", produtoController.deletarProduto);
routes.put("/produtos/:id/atualizar", produtoController.atualizarProduto);



module.exports = routes;