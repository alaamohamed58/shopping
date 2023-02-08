const Product = require("./../models/productsModel");
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    message: "succeeed",
    products,
  });
};
