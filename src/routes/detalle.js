const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/listadetalle', async(req,res) => {
    const detalle = await pool.query('select * from detalle_libro');
    //res.send('oy yeah');
    res.render('detalle_libro/listadetalle',{detalle});
});

router.post('/listadetalle', async(req,res) => {
    
    const {nombre,descripcion,editorial,precio} = req.body
    const newdetalle ={nombre,descripcion,editorial,precio};

    await pool.query('insert into detalle_libro set ?',[newdetalle]);
    res.redirect('/detalle_libro/listadetalle');
});

router.get('/listacategoria',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/listacategoria');
});

router.get('/eliminar/:id_detalle',async(req,res) => {
    const {id_detalle} = req.params;
    const detalle = await pool.query('delete from detalle_libro where id_detalle=?',[id_detalle]);
    res.redirect('/detalle_libro/listadetalle');
});

router.get('/modificar',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/modificar');
});

module.exports = router;