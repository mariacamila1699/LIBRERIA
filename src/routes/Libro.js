const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/listalibros', async(req,res) => {
    const Libro = await pool.query('select * from libros');
    //res.send('oy yeah');
    res.render('Libros/listalibros',{Libro});
});

router.post('/listalibros', async(req,res) => {
    
    const {titulo,fecha_lanzamiento,autor,categoria,editorial} = req.body
    const newLibro ={titulo,fecha_lanzamiento,autor,categoria,editorial};

    await pool.query('insert into libros set ?',[newLibro]);
    res.redirect('/Libros/listalibros');
});

router.get('/listaAutores',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/listaAutores');
});

router.get('/eliminar/:id_Libro',async(req,res) => {
    const {id_Libro} = req.params;
    const Libro = await pool.query('delete from libros where id_Libro=?',[id_Libro]);
    res.redirect('/Libros/listalibros');
});

router.get('/modificar',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/modificar');
});

module.exports = router;