const express = require('express');
const router =  express.Router();
const pool = require('../database');

router.get('/listaprestamo', async(req,res) =>{

    const prestamo = await pool.query('select * from detalle_prestamo');

    res.render('detalle_prestamo/listaprestamo',{prestamo});
});

router.post('/listaprestamo', async(req,res) =>{

    const{id_prestamo,id_libro,fecha_devolucion,mora,fecha_devuelto} = req.body
    const newprestamo = {id_prestamo,id_libro,fecha_devolucion,mora,fecha_devuelto};

    await pool.query('insert into detalle_prestamo set ?',[newprestamo]);

    res.redirect('/detalle_prestamo/listaprestamo');
});

router.get('/listaUsuarios',(req,res) => {
    //res.send('oy yeah');
    res.render('usuarios/listaUsuarios');
});

router.get('/eliminar/:id_detalle_prestamo',async(req,res) => {
    const {id_detalle_prestamo} = req.params;
    const prestamo = await pool.query('delete from detalle_prestamo where id_detalle_prestamo=?',[id_detalle_prestamo]);
    res.redirect('/detalle_prestamo/listaprestamo');
});

router.get('/modificar/:id_usuario', async(req,res) => {
    
    res.redirect('/usuarios/listaUsuarios');
});

module.exports = router;