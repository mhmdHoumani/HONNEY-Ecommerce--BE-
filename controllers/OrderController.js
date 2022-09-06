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

  put(req, res, next) {
    let { id } = req.params;
    let body = req.body;
    Order.updateOne(
      { _id: id },
      {
        $set: body,
      },
      (err, response) => {
        if (err) return next(err);
        res.status(200);
        res.json({ message: "Updated successfully!", data: response });
      }
    );
  }

  delete(req, res, next) {
    let { id } = req.params;
    Order.deleteOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }
}

const ordersController = new OrderController();
module.exports = ordersController;
