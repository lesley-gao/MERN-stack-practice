import express from 'express';
import { getAllProducts, createNewProduct, updateAProduct, deleteAProduct} from '../controllers/product.controller.js';

const router = express.Router();

// get all products 
router.get("/", getAllProducts);

// create a new product
router.post("/", createNewProduct);

//update a product
router.put("/:id", updateAProduct)

//delete a product
router.delete("/:id", deleteAProduct)

export default router;