let dbConn = require('../config/db_config');

class Produto {
    constructor(produto) {
        this.idProdutos = produto.idProdutos;
        this.nome = produto.nome;
        this.qtd_estoque = produto.qtd_estoque;
        this.is_active = produto.is_active;
        this.val_unit = produto.val_unit;

    }
}

Produto.findAll = function (result) {
    dbConn.query("SELECT * FROM produtos", function (err, res) {
        if (err) {
            console.log("error", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};