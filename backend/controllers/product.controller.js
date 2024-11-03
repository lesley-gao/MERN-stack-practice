import Product from "../models/product.js";
import mongoose from 'mongoose';

//get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // if we pass an emptry object, this means fetch all the products in the database
        console.log(products);
        res.status(200).json({ success: true, data: products })
    } catch (error) {
        console.log("error in fetching products:", error.message); //for debugging
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

// create a new product
export const createNewProduct = async (req, res) => {
    const product = req.body; //user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    } //if any of the required fields are not provides, return the 400 code and the warning message

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in creating product:", error.message); //for debugging
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

//update a product
export const updateAProduct = async (req, res) => {
    const { id } = req.params; // the id of the product to be updated

    const product = req.body; // the product to be updated, contains name, price, image

    //add the logic to check whether the id is valid or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true })  // if set new:true, it will give you the object after update is applied
        console.log(updatedProduct);
        res.status(200).json({ success: true, data: updatedProduct })
    } catch (error) {
        console.error("Error in updating product:", error.message); //for debugging
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

//delete a product
export const deleteAProduct = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
        console.log("error in deleting product:", error.message); //for debugging
        res.status(404).json({ success: false, message: "Product not found" });
    }
}