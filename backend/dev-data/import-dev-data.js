const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./../models/productsModel");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB IS CONNECTED FROM DEV-DATA "));

//READ FILE
const allproducts = JSON.parse(
  fs.readFileSync(`${__dirname}/products.json`, "utf-8")
);
//IMPORTING DATA TO MONGOOSE
const importingData = async () => {
  try {
    await Product.create(allproducts);
    console.log("succesfully imported");
  } catch (err) {
    console.error(err);
  }
  process.exit();
};

//DELETE DATA FROM MONGODB
const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log("SUCCESFULLY DELETED");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importingData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
