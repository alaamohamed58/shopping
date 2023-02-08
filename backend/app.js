const express = require("express");
const cors = require("cors");

const productsRouter = require("./routes/productsRoute");
const app = express();
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
//mounting
app.use("/api/v1/products", productsRouter);

module.exports = app;
