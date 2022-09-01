const router = require("express").Router();
const Product = require("../controllers/productController");

router.get("/find/:id", Product.get);
router.post("/", Product.post);
router.put("/:id", Product.put);
router.delete("/:id", Product.delete);
router.get("/", Product.getAll);

module.exports = router;
