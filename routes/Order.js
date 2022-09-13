const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
// const protect = require("../middlewares/authMiddleware")
const {protect, verifyTokenAndAdmin} = require("../middlewares/authMiddleware")
/* GET users listing. */
router.get('/', verifyTokenAndAdmin, OrderController.getAll);
router.get('/:id', protect, OrderController.get);
router.post('/', protect, OrderController.post);
router.put('/:id', verifyTokenAndAdmin, OrderController.put);
router.delete('/:id', verifyTokenAndAdmin, OrderController.delete);

module.exports = router;
