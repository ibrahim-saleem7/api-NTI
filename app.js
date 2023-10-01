const express = require("express");
const app = express();
const productsRoutes = require("./routes/productsRoutes");
const multer = require("multer");

app.use(express.json());
app.use("/api", productsRoutes);
// /api/**
// /api/products
// /products

app.listen(6080, (req, res) => {
  console.log("server listening on " + 6080);
});
