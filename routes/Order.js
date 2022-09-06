const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const protect = require("../middlewares/authMiddleware")
/* GET users listing. */
router.get('/', protect, OrderController.getAll);
router.get('/:id', protect, OrderController.get);
router.post('/', protect, OrderController.post);
router.put('/:id', protect, OrderController.put);
router.delete('/:id', protect, OrderController.delete);

module.exports = router;
