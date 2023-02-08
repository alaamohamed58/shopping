const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The product must have a name"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "The price must be written"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
