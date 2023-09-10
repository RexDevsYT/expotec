let cookieParser = require('cookie-parser'); 
const mongoose = require('mongoose');
var ControllerPublicaciones = require('./Controllers/ControllerPublicaciones.js')
var ControllerPersona = require('./Controllers/ControllerPersona.js')
var ControllerComentarios = require('./Controllers/ControllerComentarios.js')
module.exports = function(app){
    app.use(cookieParser());

    app.put('/api/agregarP',ControllerPublicaciones.Guardar);
    app.post('/api/modificarP',ControllerPublicaciones.Modificar);
    app.delete('/api/eliminardelabase', ControllerPublicaciones.Eliminar);
    app.post('/api/peliculaporid', ControllerPublicaciones.Seleccionarporid);
    app.get('/api/listar', ControllerPublicaciones.Listar);
    app.get('/api/ListarPorID', ControllerPublicaciones.ListarPorID);

    app.put('/api/agregarC',ControllerComentarios.Guardar);
    app.post('/api/modificarC',ControllerComentarios.Modificar);
    app.delete('/api/eliminardelabaseC', ControllerComentarios.Eliminar);
    app.post('/api/peliculaporidC', ControllerComentarios.Seleccionarporid);
    app.get('/api/listarC', ControllerComentarios.Listar);
   
    app.post('/api/Login',ControllerPersona.Login);
    app.put('/api/agregarPersona',ControllerPersona.GuardarP);
    app.post('/api/modificarPersona',ControllerPersona.ModificarP);
    app.delete('/api/eliminardelabaseP', ControllerPersona.EliminarP);
    app.get('/api/usuario', ControllerPersona.obtenerUsuario);
    app.get('/api/listarP', ControllerPersona.ListarP);




//Login y registro
app.get('/nuevaP', function(req,res)
{
    res.sendfile('front-end/Login&Registro/AgregarPersona.html');
});

app.get('/Login', function(req,res)
{
    res.sendfile('front-end/Login&Registro/Login.html');
});

app.get('/persona.js', function(req,res)
{
    res.sendfile('front-end/Login&Registro/persona.js');
});

app.get('/LCSS', function(req,res)
{
    res.sendfile('front-end/CSS/LCSS.css');
});

app.get('/LCSS2', function(req,res)
{
    res.sendfile('front-end/CSS/LCSS2.css');
});

app.get('/MCSS1', function(req,res)
{
    res.sendfile('front-end/CSS/menu1.css');
});




//Perfil
app.get('/Usuario', function(req,res) {
    res.sendfile('front-end/Home/Usuario.html');
});

app.get('/CCSS2', function(req,res)
{
    res.sendfile('front-end/CSS/cardU.css');
});


//Soporte y contacto
app.get('/soporte', function(req,res)
{
    res.sendfile('front-end/Home/soporte.html');
});

//Home
app.get('/index', function(req,res) {
    res.sendfile('front-end/Home/Index.html');
});

app.get('/publicaciones.js', function(req,res)
{
    res.sendfile('front-end/Home/publicaciones.js');
});

app.get('/Desarrollo', function(req,res)
{
    res.sendfile('imagenes/Desarrollo.png');
});

app.get('/imagenP', function(req,res)
{
    res.sendfile('imagenes/imagenP.png');
});

app.get('/CCSS', function(req,res)
{
    res.sendfile('front-end/CSS/card.css');
});

app.get('/CCSS4', function(req,res)
{
    res.sendfile('front-end/CSS/cardBlog.css');
});

app.get('/MCSS', function(req,res)
{
    res.sendfile('front-end/CSS/menu.css');
});




//Blog
app.get('/Comentarios.js', function(req,res)
{
    res.sendfile('front-end/Blog/Comentarios.js');
});

app.get('/Blog', function(req,res)
{
    res.sendfile('front-end/Blog/Blog.html');
});




//Footer
app.get('/Servicios', function(req,res)
{
    res.sendfile('Apartados_footer/Servicios.html');
});

app.get('/Acerca_de', function(req,res)
{
    res.sendfile('Apartados_footer/Acerca_de.html');
});

app.get('/Terminos', function(req,res)
{
    res.sendfile('Apartados_footer/Terminos.html');
});

app.get('/Politicas', function(req,res)
{
    res.sendfile('Apartados_footer/Politicas_de_Privacidad.html');
});

app.get('/FCSS', function(req,res)
{
    res.sendfile('front-end/CSS/footer.css');
});




//Extenciones
app.get('/BootstrapCSS', function(req,res)
{
    res.sendfile('front-end/Extenciones/Bootstrap.css');
});
app.get('/BootstrapJS', function(req,res)
{
    res.sendfile('front-end/Extenciones/Bootstrap.js');
});
app.get('/Jquery', function(req,res)
{
    res.sendfile('front-end/Extenciones/Jquery.js');
});
};

