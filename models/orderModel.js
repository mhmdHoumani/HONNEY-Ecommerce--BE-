const { Schema, model } = require("mongoose");

const OrderSchema = new Schema({
  //   user_id: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'user',
  //     required: true
  // },
  
  product_id: {
      type: Schema.Types.ObjectId,
      ref: 'product',
      required: true
  },
  total: {
    type: "number",
    required: true,
  },
  address: {
    type: "string",
    required: "Please enter ur address",
  },
 
}, {timestamps: true});

const Order = model("orders", OrderSchema);

module.exports = Order;
