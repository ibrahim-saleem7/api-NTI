const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/");
  },

  filename: (req, file, callback) => {
    callback(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

const productController = require("../controllers/productController");

router.get("/products", productController.getAllProducts);

router.get("/products/:id/:price?", productController.getProductById);

// router.post("/products", productController.addProduct);

router.post("/products", upload.single("file"), productController.addProduct);
// how to upload images to server
// 1) select body type form-data
// 2) select file type optional in form-data
// 3) write name filed in file key
// 4) select image file in value
//
module.exports = router;
