const app = require('../src/app');
const port = verifyPort(process.env.PORT || '8180');


function verifyPort(value) {
    const port = parseInt(value, 10);
    if (isNaN(port)) {
        return value;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

app.listen(port, function () {
    console.log('rodando na porta:' + port);
});