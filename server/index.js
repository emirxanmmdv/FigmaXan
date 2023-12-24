import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ProductsRoute from "./Routes/productRoute.js";
import BestSellingRoute from "./Routes/BestSellingRoute.js"
import AllProductRoute from "./Routes/AllProductsRoute.js"
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use("/products", ProductsRoute);
app.use("/BestSelling", BestSellingRoute);
app.use("/Allproducts",AllProductRoute)
const PORT = process.env.PORT;
mongoose.connect('mongodb+srv://emirxan123:emirxan321@cluster0.esb9xx0.mongodb.net/');
app.listen(PORT,()=>{
    console.log('You are welcome!');
})