import multer from "multer";

import { salvarProduto, listarProdutos, removerProduto, alterarImagem} from "../repository/produtoRepository.js";

import { Router } from "express";
let server = Router();

const upload = multer({dest: 'storage/produto' })

server.post('/produto', async (req, resp) => {
    let produto = req.body;

    let produtoInserido = await salvarProduto(produto);
    resp.send(produtoInserido);
})

server.get('/produto', async (req, resp) => {
    let listar = await listarProdutos();
    resp.send(listar);
})

server.delete('/produto/:id', async (req, resp) => {
    let id = req.params.id;

    let affectedRows = await removerProduto(id);
    if (affectedRows == 0)
        resp.status(404).send();
    else
        resp.status(202).send();
})

server.put('produto/:id', async (req, resp) => {
    let id = req.params.id;
    let produto = req.body;

    let affectedRows = await alterarRoupa(produto, id);
    if (affectedRows == 0)
        resp.status(404).send();
    else
        resp.status(202).send();
    
})

server.put('produto/imagem/:id', upload.single('imagem'), async (req, resp) => {
    let id = req.params.id;
    let imagem = req.file.path;

    let affectedRows = await alterarImagem(id, imagem);
    if (affectedRows == 0)
        resp.status(404).send();
    else
        resp.status(202).send();
})


export default server;