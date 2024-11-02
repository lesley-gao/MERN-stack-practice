import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import Product from './models/product.js';
dotenv.config(); //configure environment variable

const app = express(); //create the express server


// app.get("/products", (req, res) => {
//     res.send("Server is ready");
// })

app.use(express.json()); //add a middleware, allowing use to accept JSON data in the req.body

app.post("/products", async (req, res) =>{
    const product = req.body; //user will send this data
    
    if (!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "Please provide all fields"});
    } //if any of the required fields are not provides, return the 400 code and the warning message

    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch(error){
        console.error("Error in Create product:", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
})



app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
}) //start the server running