const Produto = require('../../models/produtosModels');

//busca todos os produtos
exports.findAll = function (req, res) {
    Produto.findAll(function (err, produto) {
        if (err) res.send(err);
        res.send(produto);
        console.log(produto);
    });
};

//cria novo produto
exports.create = function (req, res) {
    const new_produto = new Produto(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            messagem: "Por favor, forneça todos os dados necessarios para a criação do produto"
        });
    }
    else {
        Produto.create(new_produto, function (err, produto) {
            if (err) res.send(err);
            res.json({
                error: false,
                message: "Porduto cadastrado com sucesso!",
                data: produto
            });
        });
    }
};

//Busca produto especifico por ID
exports.findByID = function (req, res) {
    Produto.findByID(res.params.id, function (err, produto) {
        if (err) res.send(err);
        res.json(produto);
    });
};

//Atualiza Produto
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "Por favor, forneça todos os campos necessarios para atualizar o produto!"
        });
    }
    else {
        Produto.update(req.params.id, new Produto(req.body), function (err, produto) {
            if (err) res.send(err);
            res.json({
                error: false,
                message: "Produto atualizado com sucesso!"
            });
        });
    }
};

//Exclusão de um produto
exports.delete = function (req, res) {
    Produto.delete(req.params.id, function (err, produto) {
        if (err) res.send(err);
        res.json({
            error: false,
            message: "Produto excluido com sucesso!"
        });
    });
}