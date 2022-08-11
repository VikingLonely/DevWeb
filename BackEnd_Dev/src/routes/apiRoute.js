const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.post('/', controller.post); dadasdas
router.put('/:id/:nome', controller.put);
router.delete('/:id/:nome', controller.delete);
module.exports = router;