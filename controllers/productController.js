const Product = require("../models/productModel");
const cloudinary = require("../middlewares/cloudinary");
const upload = require("../middlewares/upload");

class ProductControllerClass {
  post = async (req, res) => {

    try{
    const imageResult = await cloudinary.uploader.upload(req.file.path);
    // res.json(imageResult);

    const newProduct = new Product({
      title: req.body.title,
      desc: req.body.desc,
      // img: req.file && req.file.path,

      avatar: imageResult.secure_url,
      cloudinary_id: imageResult.public_id,

      categories: req.body.categories,
      weight: req.body.weight,
      type: req.body.type,
      price: req.body.price,
      stockQuantity: req.body.stockQuantity,
    });
   
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
      console.log("Error posting product");
    }
  };

  put = async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body && req.file.path,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  delete = async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      await cloudinary.uploader.destroy(req.params.id.cloudinary_id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  get = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  getAll = async (req, res) => {
    //create a query
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
      let products;

      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(5);
      } else if (qCategory) {
        products = await Product.find({
          //find by categories, return this if query has the same cat as in categories array
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }

      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  };
}

const productContollerClass = new ProductControllerClass();
module.exports = productContollerClass;
