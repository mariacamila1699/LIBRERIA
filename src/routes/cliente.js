const express = require('express');
const router =  express.Router();
const pool = require('../database');

router.get('/listaUsuarios', async(req,res) =>{

    const cliente = await pool.query('select * from usuarios');

    res.render('usuarios/listaUsuarios',{cliente});
});

router.post('/listaUsuarios', async(req,res) =>{

    const{nombre,apellido,telefono,direccion,correo} = req.body
    const newcliente = {nombre,apellido,telefono,direccion,correo};

    await pool.query('insert into usuarios set ?',[newcliente]);

    res.redirect('/usuarios/listaUsuarios');
});

router.get('/listaUsuarios',(req,res) => {
    //res.send('oy yeah');
    res.render('usuarios/listaUsuarios');
});

router.get('/eliminar/:id_usuario',async(req,res) => {
    const {id_usuario} = req.params;
    const usuario = await pool.query('delete from usuarios where id_usuario=?',[id_usuario]);
    res.redirect('/usuarios/listaUsuarios');
});

router.get('/modificar/:id_usuario', async(req,res) => {
    
    res.redirect('/usuarios/listaUsuarios');
});

module.exports = router;