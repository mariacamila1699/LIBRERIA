const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/listaeditoriales', async(req,res) => {
    const editorial = await pool.query('select * from editoriales');
    //res.send('oy yeah');
    res.render('editoriales/listaeditoriales',{editorial});
});

router.post('/listaeditoriales', async(req,res) => {
    
    const {editorial} = req.body
    const neweditorial ={editorial};

    await pool.query('insert into editoriales set ?',[neweditorial]);
    res.redirect('/editoriales/listaeditoriales');
});

router.get('/listacategoria',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/listacategoria');
});

router.get('/eliminar/:id_editorial',async(req,res) => {
    const {id_editorial} = req.params;
    const editorial = await pool.query('delete from editoriales where id_editorial=?',[id_editorial]);
    res.redirect('/editoriales/listaeditoriales');
});

router.get('/modificar',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/modificar');
});

module.exports = router;