const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/listaAutores', async(req,res) => {
    const autor = await pool.query('select * from autores');
    //res.send('oy yeah');
    res.render('autores/listaAutores',{autor});
});

router.post('/listaAutores', async(req,res) => {
    
    const {nombre_autor} = req.body
    const newautor ={nombre_autor};

    await pool.query('insert into autores set ?',[newautor]);
    res.redirect('/autores/listaAutores');
});

router.get('/listaAutores',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/listaAutores');
});

router.get('/eliminar/:id_autor',async(req,res) => {
    const {id_autor} = req.params;
    const autor = await pool.query('delete from autores where id_autor=?',[id_autor]);
    res.redirect('/autores/listaAutores');
});

router.get('/modificar',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/modificar');
});

module.exports = router;