import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
dotenv.config(); //configure environment variable

const app = express(); //create the express server

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
}) //start the server running

app.get("/products", (req, res) => {
    res.send("Server is ready");
})