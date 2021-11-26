const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen (process.env.PORT ||3000, ()=>{
    console.log('Servidor funcionando bien');
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/carrito-de-compras", (req, res) => {
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get("/registro", (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.get("/ingresar", (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get("/detalle-producto", (req, res) => {
    res.sendFile(__dirname + '/views/productDetail.html');
});