let mysql = require('mysql2');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'Viking',
    password: 'Viking.021',
    database: 'financeiro'
});

connection.connect();
connection.query("SELECT * FROM tabela", function (err, result, fields) {
    if (err) throw err;
    Object.keys(result).forEach(function (key) {
        let row = result[key];
        console.log(row.nome);
    });
});
connection.end();