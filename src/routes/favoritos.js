const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/listaFavoritos', async(req,res) => {
    const favoritos = await pool.query('select * from autores_favoritos');
    //res.send('oy yeah');
    res.render('autores_favoritos/listaFavoritos',{favoritos});
});

router.post('/listaFavoritos', async(req,res) => {
    
    const {nombre,nacionalidad,idioma,libro_destacado} = req.body
    const newfavorito ={nombre,nacionalidad,idioma,libro_destacado};

    await pool.query('insert into autores_favoritos set ?',[newfavorito]);
    res.redirect('/autores_favoritos/listaFavoritos');
});

router.get('/listaAutores',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/listaAutores');
});

router.get('/eliminar/:id_favoritos',async(req,res) => {
    const {id_favoritos} = req.params;
    const favoritos = await pool.query('delete from autores_favoritos where id_favoritos=?',[id_favoritos]);
    res.redirect('/autores_favoritos/listaFavoritos');
});

router.get('/modificar',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/modificar');
});

module.exports = router;