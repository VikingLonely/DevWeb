const mysql = require('mysql2');
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'asdsadasd',
    password: 'asdsads',
    database: 'addsadad'
});

dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Banco de Dados conectado! ");
});

module.exports = dbConn;