const Order = require('../models/orderModel');

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

      post(req, res, next) {
        let body = req.body;
        console.log(body)
        let order = new Order(body);
        order.save((err, response) => {
          if (err) return next(err);
          res.status(200).send(response);
        });
      }
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
            res.status(200).send(response);
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
