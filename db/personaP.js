let mongoose = require('mongoose');
//se declara un esquema sobre los datos que se van a guardar en la tabla para el usuario
module.exports = mongoose.model('personaP',{ 
    NOMBRE: String,
    APELLIDO: String,
    EMAIL: String,
    GENERO: String,
    FECHAN: String,
    TIPOUSUARIO: String,
    PASSWORD: String,
    FOTO: String,
        itemRegistrados:{
            type: String,
            ref: 'PUBLICACIONESDB',
            require: true,
        }
});
     