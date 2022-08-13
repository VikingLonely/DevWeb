const express = require('express');
const router = express.Router();
const produtosControl = require("../controllers/produtosController");
router.get('/', produtosControl.findAll);
router.get('/:id', produtosControl.findByID);
router.post('/', produtosControl.create);
router.put('/:id', produtosControl.update);
router.delete('/:id', produtosControl.delete);

module.exports = router;