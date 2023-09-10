let mongoose = require('mongoose');
//se declara un esquema sobre los datos que se van a guardar en la tabla para el usuario
module.exports = mongoose.model('blogdb',{ 
    NOMBRE: String,
    COMENTARIO: String,
    FOTO: String
});