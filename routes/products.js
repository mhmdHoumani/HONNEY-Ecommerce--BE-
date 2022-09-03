const router = require("express").Router();
const Product = require("../controllers/productController");
const protect = require("../middlewares/authMiddleware");

router.get("/find/:id", Product.get);
router.post("/", protect, Product.post);
router.put("/:id", protect, Product.put);
router.delete("/:id", protect, Product.delete);
router.get("/", Product.getAll);

module.exports = router;
