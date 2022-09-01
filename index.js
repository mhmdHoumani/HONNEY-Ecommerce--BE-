const express = require("express");
const app = express();
const connectDB = require("./configuration/db.js");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
// const bodyParser = require('body-parser');


const products = require("./routes/products");

dotenv.config();
connectDB();

app.use(express.json());

app.use("/products", products);

app.listen(port, () => console.log(`Server started on port: ${port}`));
