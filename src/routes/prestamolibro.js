const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/listalibprestados', async(req,res) => {
    const categoria = await pool.query('select * from categorias');
    //res.send('oy yeah');
    res.render('presta/listalibprestados',{categoria});
});

router.post('/listacategoria', async(req,res) => {
    
    const {categoria} = req.body
    const newcategoria ={categoria};

    await pool.query('insert into categorias set ?',[newcategoria]);
    res.redirect('/categoria/listacategoria');
});

router.get('/listacategoria',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/listacategoria');
});

router.get('/eliminar/:id_categoria',async(req,res) => {
    const {id_categoria} = req.params;
    const categoria = await pool.query('delete from categorias where id_categoria=?',[id_categoria]);
    res.redirect('/categoria/listacategoria');
});

router.get('/modificar',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/modificar');
});

module.exports = router;