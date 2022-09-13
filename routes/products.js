const router = require("express").Router();
const Product = require("../controllers/productController");
const protect = require("../middlewares/authMiddleware");
const upload = require("../middlewares/upload");

router.get("/find/:id", Product.get);
router.post("/", upload.single("img"), protect, Product.post);
router.put("/:id",upload.single("img") , protect, Product.put);
router.delete("/:id", protect, Product.delete);
router.get("/", Product.getAll);

module.exports = router;
