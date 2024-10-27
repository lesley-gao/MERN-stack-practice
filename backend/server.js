import express from 'express';

const app = express(); //create the express server

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
}) //start the server running

app.get("/products", (req, res) => {
    res.send("Server is ready");
})