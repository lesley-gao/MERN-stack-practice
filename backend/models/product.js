import mongoose from "mongoose";    

const productSchema = new mongoose.Schema({
    name: {
        type: String, required:true
    },
    price:{
        type: Number, required: true
    },
    image: {
        type: String, required: true
    }
}, {
    timestamps:true //createAt,updateAt
});

const Product = mongoose.model('Product', productSchema); // For "Product", In mongoose syntax, just used singular form and capitalize the first letter.

export default Product;