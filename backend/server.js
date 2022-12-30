const express = require('express');
const products = require('./data/products');
const {useParams} = require("react-router-dom");


const app = express();

app.listen(5000, console.log('Server is running on port 5000'));

app.get('/', (req, res) =>{
    res.send('API is running');
});

app.get('/products', (req, res) =>{
    res.json(products);
});

app.get('/products/:id', (req, res) =>{
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
});
