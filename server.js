// Imports
const express = require('express');
const bodyParser = require('body-parser');
const shortid = require('shortid');
const mongoose = require('mongoose');

const app = express();

// MIDDLEWARES  
app.use(bodyParser.json());

// Initialize mongoDB
mongoose.connect("mongodb://localhost/shopping-cart-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
})

// Define a Model & Define a Product Schema
const Product = mongoose.model('products', new mongoose.Schema({
    // Schema goes here
    _id: { type: String,  default: shortid.generate },
    title: String,
    description: String,
    image: String, 
    price: Number,
    availableSizes: [String],
}));

// ENDPOINTS

// GET (Porducts)
app.get('/api/products', async (req, res) => {
    // Find a Product
    const products = await Product.find({});
    // Send back the Product(s) Found
    res.send(products);
})

// POST (Create Product(s) inside the Data-Base)
app.post('/api/products', async (req, res) => {
    // Create new Product
    const newProduct = new Product(req.body);
    // save to Data-Base
    const savedProduct = await newProduct.save();
    // Send back the new Product Saved
    res.send(savedProduct);
})

// DELETE
app.delete('/api/products/:id', async (req, res) => {
    // PIck up & Delete the ID written by the user
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    // Send back the Producted Deleted
    res.send(deletedProduct);
})

// Define the port listened
const port = 3000 || process.env.PORT;

// LISTEN THE PORT  
app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`);
})