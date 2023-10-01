const productModel = require("../models/product");

module.exports = {
  getAllProducts: (req, res) => {
    const products = productModel.getAll();

    res.json(products);
  },

  getProductById: (req, res) => {
    const id = parseInt(req.params.id);

    const price = req.params.price ? parseFloat(req.params.price) : null;

    const product = productModel.getByID(id, price);

    if (!product) {
      return res.status(500).json({ error: "Product not found" });
    }

    return res.status(200).json(product);
  },

  // addProduct: (req, res) => {
  //   products = productModel.addProduct(req.body);

  //   res.status(200).json(products);
  // },

  addProduct: (req, res) => {
    const product = req.body;

    product.imageURL = req.file ? req.file.filename : null;

    products = productModel.addProduct(product);

    res.status(200).json(products);
  },
};
