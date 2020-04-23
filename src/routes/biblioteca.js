const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/listabiblioteca', async(req,res) => {
    const biblioteca = await pool.query('select * from biblioteca');
    //res.send('oy yeah');
    res.render('biblioteca/listabiblioteca',{biblioteca});
});

router.post('/listabiblioteca', async(req,res) => {
    
    const {ciudad,telefono,direccion} = req.body
    const newbiblioteca ={ciudad,telefono,direccion};

    await pool.query('insert into biblioteca set ?',[newbiblioteca]);
    res.redirect('/biblioteca/listabiblioteca');
});

router.get('/listaAutores',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/listaAutores');
});

router.get('/eliminar/:id_biblioteca',async(req,res) => {
    const {id_biblioteca} = req.params;
    const biblioteca = await pool.query('delete from biblioteca where id_biblioteca=?',[id_biblioteca]);
    res.redirect('/biblioteca/listabiblioteca');
});

router.get('/modificar',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/modificar');
});

module.exports = router;