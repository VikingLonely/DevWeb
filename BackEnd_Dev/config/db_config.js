const mysql = require('mysql2');
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'Viking',
    password: 'Viking.021',
    database: 'financeiro'
});

dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Banco de Dados conectado! ");
});

module.exports = dbConn;