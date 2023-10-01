const express = require("express");
const app = express();
const productsRoutes = require("./routes/productsRoutes");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/");
  },

  filename: (req, file, callback) => {
    callback(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded");
});

app.use(express.json());
app.use("/api", productsRoutes);
// api/**
// api/products
// /products

app.listen(6080, (req, res) => {
  console.log("server listening on " + 6080);
});
