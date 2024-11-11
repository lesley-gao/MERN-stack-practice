import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/product.route.js';
import path from 'path';

dotenv.config(); //configure environment variable

const app = express(); //create the express server
const PORT = process.env.PORT || 5000; //add" || 5000 " as a backup

const __dirname = path.resolve();

app.use(express.json()); //add a middleware, allowing use to accept JSON data in the req.body

// API routes
app.use("/api/products", productRoutes); // all requests to "/api/products/*" will be handled by the endpoints defined in productRoutes

// If the application is running in production mode
if (process.env.NODE_ENV === "production") {

    // Serve static files(JS, CSS, images etc.) from the dist folder
    // path.join(__dirname, "/frontend/dist") creates the absolute path to the dist folder
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    // Handle all other routes by serving index.html to support client-side routing in React
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(5000, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
}) //start the server running