const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//inicio 
const app=express();

//configuraciones
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views' ));

//--congiguracion de handlebars--//
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));

app.set('view engine','.hbs');


//peticiones - midleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//variables globales
app.use((req,res,next)=> {
    next();
});


//rutas
app.use(require('./routes'));
app.use('/index', require('./routes/index'));
app.use('/usuarios', require('./routes/cliente'));
app.use('/admin', require('./routes/admin'));
app.use('/categoria', require('./routes/categoria'));
app.use('/Libros', require('./routes/Libro'));
app.use('/autores', require('./routes/autores'));
app.use('/autores_favoritos', require('./routes/favoritos'));
app.use('/biblioteca', require('./routes/biblioteca'));
app.use('/detalle_libro', require('./routes/detalle'));
app.use('/detalle_prestamo', require('./routes/detalleprestamo'));
app.use('/editoriales', require('./routes/editoriales'));
app.use('/empleados', require('./routes/empleado'));
app.use('/empleado', require('./routes/empleado'));



// public

app.use(express.static(path.join(__dirname, 'public')));



//como iniciamos el servidor
app.listen(app.get('port'),()=> {
    console.log('server on port',app.get('port'));
})
