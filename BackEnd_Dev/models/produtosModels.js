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
        } else {
            result(null, res);
        }
    });
};

Produto.create = function (newProduto, result) {
    dbConn.query("INSERT INTO produtos set ?", newProduto, function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

Produto.findById = function (Id, result) {
    dbConn.query("SELECT * FROM produtos WHERE idprodutos = ?", Id, function (err, res) {
        if (err) {
            console.log("error", err);
            result(err, null);
        } else {
            result(null, res);
        }

    });
};

Produto.updade = function (Id, produto, result) {
    dbConn.query("UPDATE produtos SET name =?, qtd_estoque=?, is_active?, val_unit=? WHERE idprodutos = ?",
        [produto.nome, produto.qtd_estoque, produto.is_active, produto.val_unit, Id], function (err, res) {
            if (err) {
                console.log("error", err);
                result(err, null);
            } else {
                result(null, res);
            }

        });
};

Produto.delete = function (Id, result) {
    dbConn.query("DELETE FROM produtos WHERE idprodutos = ?", Id, function (err, res) {
        if (err) {
            console.log("error", err);
            result(err, null);
        } else {
            result(null, res);
        }

    });
};

module.exports = Produto;