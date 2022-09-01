const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

/* GET users listing. */
router.get('/', OrderController.getAll);
router.get('/:id', OrderController.get);
router.post('/', OrderController.post);
router.put('/:id', OrderController.put);
router.delete('/:id', OrderController.delete);

module.exports = router;
