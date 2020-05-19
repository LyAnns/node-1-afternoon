const express = require('express')
const app = express()
const getProduct = require('./getProduct')
const getProducts = require('./getProducts')
const port = 3001

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen(port, ()=>{
    console.log("Server is running and ready to receive requests")
})