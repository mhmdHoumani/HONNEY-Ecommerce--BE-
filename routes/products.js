const router = require("express").Router();
const Product = require("../controllers/productController");
// const protect = require("../middlewares/authMiddleware");
const upload = require("../middlewares/upload");
const {protect, verifyTokenAndAdmin} = require("../middlewares/authMiddleware");

router.get("/find/:id", Product.get);
router.post("/",verifyTokenAndAdmin, upload.single("img"), protect, Product.post);
router.put("/:id",upload.single("img") , verifyTokenAndAdmin, Product.put);
router.delete("/:id", verifyTokenAndAdmin, Product.delete);
router.get("/", Product.getAll);

module.exports = router;
