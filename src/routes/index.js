const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.render('index/index');
});

router.get('/product-details',(req,res) =>{
    res.render('index/product-details');
});

router.get('/contact-us',(req,res) =>{
    res.render('index/contact-us');
});

router.get('/blog-single',(req,res) =>{
    res.render('index/blog-single');
});


router.get('/blog',(req,res) =>{
    res.render('index/blog');
});

router.get('/cart',(req,res) =>{
    res.render('index/cart');
});

router.get('/checkout',(req,res) =>{
    res.render('index/checkout');
});

router.get('/login',(req,res) =>{
    res.render('index/login');
});

router.get('/shop',(req,res) =>{
    res.render('index/shop');
});

router.get('/Account',(req,res) =>{
    res.render('index/Account');
});

router.get('/wishlist',(req,res) =>{
    res.render('index/wishlist');
});

router.get('/LibrosDrama',(req,res) =>{
    res.render('index/LibrosDrama');
});

router.get('/LibrosMusica',(req,res) =>{
    res.render('index/LibrosMusica');
});

router.get('/LibrosTerror',(req,res) =>{
    res.render('index/LibrosTerror');
});

router.get('/historia',(req,res) =>{
    res.render('index/historia');
});



module.exports = router;