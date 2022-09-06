const Order = require("../models/orderModel");

class OrderController {
  getAll(req, res, next) {
    Order.find({}, (err, response) => {
      if (err) return next(err);

      res.status(200).send(response);
    });
  }

  get(req, res, next) {
    let { id } = req.params;
    Order.findById(id, (err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }

  post = async (req, res, next) => {
    try {
      const newOrder = new Order(req.body);
      const savedOrder = await newOrder.save();
      res.status(200);
      res.json({ message: "Product added!" });
    } catch (error) {
      res.status(400);
      res.json({ message: "Please select a product!" });
    }
  };

  put = async (req, res, next) => {
    const {id} = req.params;
    const {total, address, product_id}=req.body;
    if(!total || !address || !product_id){
      res.status(400);
      return res.json({ message: "All field are required" });
    }

    try{
      const result = await Order.findOneAndUpdate({_id: id}, {
        total,
        address,
        product_id
      })
      if(result){
        res.status(200);
        return res.json({ message: "Update successfully" });
        
      }
      res.status(404);
      return res.json({ message: "Order not found" });


    }
    catch{
      res.status(500)
      return res.json({ message: "Something went wrong!" });

    }

  }
  

  delete = async(req, res, next)=>{
    const {id} = req.params;

    try{
      const del = await Order.findByIdAndDelete({ _id: id })
      if (del){
        res.status(200);
        return res.json({message: "Delete successfully!"})
      }
      res.status(404);
      return res.json({ message: "not an order!" });


    }
    catch{
      res.status(500)
      return res.json({ message: "Something went wrong!" });

    }

  }



}

const ordersController = new OrderController();
module.exports = ordersController;
