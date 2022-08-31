const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  total: {
    type: 'integer',
    required: true,
  
  },
  address: {
    type: 'string',
    required: true,
  },
  timestamps: true,
  

 
});

const Order = model('orders', OrderSchema);

module.exports = Order;
