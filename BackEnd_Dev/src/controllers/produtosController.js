const Produto = require('../../models/produtosModels');
exports.findAll = function (req, res) {
    Produto.findAll(function (err, produtos) {
        if (err) res.send(err);
        res.send(produto);
    })
}