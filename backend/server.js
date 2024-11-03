import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/product.route.js';

dotenv.config(); //configure environment variable

const app = express(); //create the express server

app.use(express.json()); //add a middleware, allowing use to accept JSON data in the req.body

app.use("/api/products", productRoutes); // when we vist "/api/products", we will used the api endpoints defined in productRoutes

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
}) //start the server running