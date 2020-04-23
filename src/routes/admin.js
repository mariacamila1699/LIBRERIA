const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/listaAdmin', async(req,res) => {
    const admin = await pool.query('select * from admin');
    //res.send('oy yeah');
    res.render('admin/listaAdmin',{admin});
});

router.post('/listaAdmin', async(req,res) => {
    
    const {usuario,contra} = req.body
    const newadmin ={usuario,contra};

    await pool.query('insert into admin set ?',[newadmin]);
    res.redirect('/admin/listaAdmin');
});

router.get('/listaAdmin',(req,res) => {
    //res.send('oy yeah');
    res.render('admin/listaAdmin');
});

router.get('/eliminar/:id_admin',async(req,res) => {
    const {id_admin} = req.params;
    const admin = await pool.query('delete from admin where id_admin=?',[id_admin]);
    res.redirect('/admin/listaAdmin');
});

router.get('/listaAdmin',(req,res) => {
    //res.send('oy yeah');
    res.render('admin/listaAdmin');
});

module.exports = router;